
import React from 'react';
import Link from 'next/link';
import { Heart, MessageSquare, Eye, Star } from 'lucide-react';

interface FeaturedArticleProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorImg: string;
  thumbnail: string;
  rizzScore: number;
  comments: number;
  views: number;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  excerpt,
  author,
  authorImg,
  thumbnail,
  rizzScore,
  comments,
  views,
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl border-4 border-brainrot-pink bg-black">
      <div className="absolute inset-0">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[300px] justify-end">
        <div className="absolute top-4 right-4 bg-brainrot-neon text-black font-bold py-1 px-3 rounded-full flex items-center space-x-1 transform rotate-3">
          <Star size={16} className="fill-black" />
          <span>FEATURED</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-pixel text-white mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {title}
        </h2>
        
        <p className="text-gray-200 mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brainrot-neon">
              <img src={authorImg} alt={author} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-white">{author}</span>
          </div>
          
          <div className="flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-1">
              <Heart size={16} className="text-brainrot-pink" />
              <span className="text-sm">{rizzScore}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare size={16} className="text-brainrot-blue" />
              <span className="text-sm">{comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={16} className="text-brainrot-purple" />
              <span className="text-sm">{views}</span>
            </div>
          </div>
        </div>
        
        <Link 
          href={`/article/${id}`}
          className="absolute inset-0 z-10"
          aria-label={`Read article: ${title}`}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-chaos"></div>
    </div>
  );
};

export default FeaturedArticle;

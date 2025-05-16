import React from 'react';
import Link from 'next/link';
import { Heart, MessageSquare, Eye } from 'lucide-react';

interface ArticleCardProps {
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

const ArticleCard: React.FC<ArticleCardProps> = ({
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
    <Link 
      href={`/article/${id}`}
      className="meme-card group relative"
    >
      <div className="overflow-hidden rounded-lg mb-3 bg-black">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-comic text-lg md:text-xl font-bold line-clamp-2 text-gray-900">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={authorImg} alt={author} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-medium">{author}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-500">
            <div className="flex items-center space-x-1">
              <Heart size={14} className="text-brainrot-pink" />
              <span className="text-xs">{rizzScore}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare size={14} className="text-brainrot-blue" />
              <span className="text-xs">{comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={14} className="text-brainrot-purple" />
              <span className="text-xs">{views}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-1 -right-1 bg-brainrot-neon text-black font-bold text-xs py-1 px-2 rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        🔥 Skibidi 🔥
      </div>
    </Link>
  );
};

export default ArticleCard; 
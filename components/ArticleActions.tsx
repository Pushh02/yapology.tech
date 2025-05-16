'use client';

import React from 'react';
import { Heart, MessageSquare, Share2, Eye } from 'lucide-react';

interface Article {
  id: string;
  rizzScore: number;
  comments: number;
  views: number;
  isLiked: boolean;
}

interface ArticleActionsProps {
  article: Article;
}

export default function ArticleActions({ article }: ArticleActionsProps) {
  const [isLiked, setIsLiked] = React.useState(article.isLiked);
  const [rizzScore, setRizzScore] = React.useState(article.rizzScore);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setRizzScore(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = () => {
    alert("Yeeted to Ohio with caption: \"This yap hittin' different fr 💀\"");
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center">
      <div className="flex space-x-6">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-2 ${isLiked ? 'text-brainrot-pink' : 'text-gray-500'}`}
        >
          <Heart 
            size={24} 
            className={`transition-transform ${isLiked ? 'fill-brainrot-pink scale-110' : ''}`}
          />
          <span>{rizzScore}</span>
        </button>
        
        <button className="flex items-center gap-2 text-gray-500">
          <MessageSquare size={24} />
          <span>{article.comments}</span>
        </button>
        
        <button className="flex items-center gap-2 text-gray-500">
          <Eye size={24} />
          <span>{article.views}</span>
        </button>
      </div>
      
      <button 
        onClick={handleShare}
        className="ohio-button flex items-center gap-2"
      >
        <Share2 size={18} />
        <span>Yeet to Ohio</span>
      </button>
    </div>
  );
} 
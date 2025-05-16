'use client';

import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Heart } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  authorImg: string;
  content: string;
  date: string;
  likes: number;
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = React.useState(initialComments);
  const [newComment, setNewComment] = React.useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: `c${comments.length + 1}`,
      author: 'You',
      authorImg: 'https://i.pravatar.cc/150?img=39',
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-comic text-brainrot-purple mb-6">Drop Your Yaps Below 🔥</h2>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="border-2 border-brainrot-blue rounded-lg overflow-hidden">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your skibidi thoughts here..."
            className="w-full p-4 min-h-[100px] focus:outline-none"
          ></textarea>
          <div className="bg-gray-100 p-3 flex justify-end">
            <button 
              type="submit"
              className="skibidi-button"
            >
              Yap It 🚀
            </button>
          </div>
        </div>
      </form>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="flex gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-brainrot-neon transition-colors"
          >
            <Avatar className="w-12 h-12">
              <img src={comment.authorImg} alt={comment.author} />
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <h4 className="font-bold">{comment.author}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-800 mb-2">{comment.content}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <button className="flex items-center gap-1 hover:text-brainrot-pink transition-colors">
                  <Heart size={14} />
                  <span>{comment.likes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
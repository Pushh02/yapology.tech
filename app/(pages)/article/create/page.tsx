"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import MemeGenerator from '@/components/MemeGenerator';
import TipTapEditor from '@/components/TipTapEditor';
import { Button } from '@/components/ui/button';
import { Sparkles, Image, Smile, Gift, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CreateArticlePage: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Simulate an API call
    setTimeout(() => {
      if (title && content && thumbnail) {
        setSuccessMessage('Article created successfully! Redirecting...');
        setTimeout(() => {
          router.push('/home');
        }, 2000);
      } else {
        setErrorMessage('Please fill in all fields.');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <MemeGenerator />
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-pixel text-center mb-6 text-brainrot-pink">
          Create Your Own <span className="text-brainrot-neon">Yap</span> Article 🚀
        </h1>
        
        {successMessage && (
          <div className="bg-green-200 text-green-800 border border-green-800 rounded-md p-4 mb-4">
            {successMessage}
          </div>
        )}
        
        {errorMessage && (
          <div className="bg-red-200 text-red-800 border border-red-800 rounded-md p-4 mb-4">
            {errorMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto h-[600px] flex flex-col">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Article Title:
            </label>
            <input
              type="text"
              id="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-brainrot-blue"
              placeholder="Enter the title of your yap"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4 flex-1 flex flex-col">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
              Article Content:
            </label>
            <TipTapEditor
              content={content}
              onChange={setContent}
              placeholder="Share your brainrot thoughts..."
              className="flex-1"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-gray-700 font-bold mb-2">
              Thumbnail URL:
            </label>
            <input
              type="url"
              id="thumbnail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-brainrot-neon"
              placeholder="Paste image URL for thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Button
              className="skibidi-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Sparkles size={16} className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Star size={16} className="mr-2" />
                  Create Yap Article
                </>
              )}
            </Button>
            <Link href="/home" className="inline-block align-baseline font-bold text-sm text-brainrot-blue hover:text-brainrot-pink">
              Cancel
            </Link>
          </div>
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateArticlePage;

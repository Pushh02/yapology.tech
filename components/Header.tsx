'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSkibidiMode, setIsSkibidiMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('skibidi-mode', isSkibidiMode);
  }, [isSkibidiMode]);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="relative overflow-hidden">
        <div className="ticker-container">
          <p className="ticker-text font-comic text-sm">
            BREAKING: Skibidi Toilet Spotted in Ohio 👁️👄👁️ | Rizz Levels Reaching All-Time High 📈 | 
            New Yapper "GyattMaster69" Breaks Ohio Record 💀 | The Backrooms Found Under Local Walmart 🫡
          </p>
        </div>
      </div>

      <div className="container mx-auto p-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-pixel text-brainrot-pink glitch-text transform hover:scale-105 transition-transform">
                yapology<span className="text-brainrot-neon">.tech</span>
              </h1>
              <div className="absolute -top-3 -right-3 animate-bounce-limited">🔥</div>
              <div className="absolute -bottom-3 -left-3 animate-float delay-150">💀</div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for rizz 🔍" 
              className="px-4 py-2 rounded-full bg-gray-800 text-white border-2 border-brainrot-blue focus:outline-none focus:ring-2 focus:ring-brainrot-neon w-64"
            />
            <Search className="absolute right-3 top-2.5 text-brainrot-pink" size={18} />
          </div>

          <Link href="/create" className="skibidi-button">
            Yeet New Article 🚀
          </Link>

          <div className="flex space-x-2">
            <button 
              onClick={() => setIsSkibidiMode(!isSkibidiMode)}
              className={`p-2 rounded-full border-2 ${isSkibidiMode ? 'bg-brainrot-neon border-brainrot-pink' : 'bg-gray-800 border-brainrot-blue'}`}
              aria-label="Toggle Skibidi Mode"
            >
              🚽
            </button>

            <Link href="/login" className="p-2 rounded-full bg-gray-800 border-2 border-brainrot-purple hover:bg-brainrot-purple">
              <User size={20} className="text-white" />
            </Link>

            <button className="p-2 rounded-full bg-gray-800 border-2 border-brainrot-pink hover:bg-brainrot-pink relative">
              <Bell size={20} className="text-white" />
              <span className="absolute -top-1 -right-1 bg-brainrot-neon text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </div>

        <button 
          className="md:hidden p-2 rounded-lg bg-brainrot-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} className="text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t-2 border-brainrot-pink p-4">
          <div className="flex justify-center pb-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for rizz 🔍" 
                className="px-4 py-2 rounded-full bg-gray-800 text-white border-2 border-brainrot-blue focus:outline-none focus:ring-2 focus:ring-brainrot-neon w-full"
              />
              <Search className="absolute right-3 top-2.5 text-brainrot-pink" size={18} />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/create" className="skibidi-button text-center">
              Yeet New Article 🚀
            </Link>
            <Link href="/login" className="ohio-button text-center">
              Login / Sign Up 🫡
            </Link>
            <button 
              onClick={() => setIsSkibidiMode(!isSkibidiMode)}
              className={`py-2 px-4 rounded-lg border-2 text-center ${isSkibidiMode ? 'bg-brainrot-neon border-brainrot-pink text-black' : 'bg-gray-800 border-brainrot-blue text-white'}`}
            >
              Skibidi Mode {isSkibidiMode ? 'ON' : 'OFF'} 🚽
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

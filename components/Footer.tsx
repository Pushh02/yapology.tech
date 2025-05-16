'use client'
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t-2 border-brainrot-purple">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-pixel text-brainrot-pink mb-4">yapology<span className="text-brainrot-neon">.tech</span></h3>
            <p className="text-gray-400">The most brainrot yap platform in Ohio fr fr no cap 🔥💀</p>
            
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-2xl hover:text-brainrot-pink transition-colors">
                <span className="sr-only">Discord</span>
                📱
              </a>
              <a href="#" className="text-2xl hover:text-brainrot-blue transition-colors">
                <span className="sr-only">TikTok</span>
                🎵
              </a>
              <a href="#" className="text-2xl hover:text-brainrot-neon transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-comic text-brainrot-blue mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className="text-gray-400 hover:text-brainrot-neon transition-colors">
                  🏠 Home Page
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-gray-400 hover:text-brainrot-pink transition-colors">
                  🚀 Create Article
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-brainrot-yellow transition-colors">
                  📊 Your Stats
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => Math.random() > 0.5 ? alert('Wow, much yap, such contact 🐶') : alert('No rizz detected, try again later 💀')}
                  className="text-gray-400 hover:text-brainrot-blue transition-colors"
                >
                  📨 Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-comic text-brainrot-yellow mb-4">Get Random Yap</h4>
            <button 
              onClick={() => alert('Taking you to a random yap... jk no yaps yet 💀')} 
              className="skibidi-button w-full mb-4"
            >
              Random Yap 🎲
            </button>
            
            <div className="bg-gray-800 p-4 rounded-lg border-2 border-brainrot-neon">
              <p className="text-sm text-white mb-2">Daily Brainrot Quote:</p>
              <p className="text-brainrot-pink font-comic italic">"Stay rizzy, king, Ohio isn't real fr fr 💀🫡"</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 yapology.tech | No cap, all rizz 🔥</p>
          <p className="mt-1 text-xs">Website made with skibidi energy and Ohio magic</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

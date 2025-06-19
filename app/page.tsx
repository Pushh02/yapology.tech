import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import MemeGenerator from '@/components/MemeGenerator';
import { Sparkles, Star, Laugh } from 'lucide-react';
import LoadingScreen from '@/components/LoadingScreen';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MemeGenerator />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img 
            src="https://i.kym-cdn.com/entries/icons/original/000/042/876/cover3.jpg" 
            alt="Skibidi background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-pixel mb-6 glitch-text">
              <div className="flex flex-wrap justify-center">
                <span className="text-brainrot-pink">WELCOME TO </span>
                <span className="text-brainrot-neon ml-2"> YAPOLOGY</span>
                <span className="text-gray-800 ml-2">RIZZLERS 🫡💥</span>
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl font-comic mb-8">
              DROP YOUR <span className="text-brainrot-pink">BRAINROT</span> BANGERS HERE 🔥
              <br />
              <span className="text-sm">The most chaotic article platform this side of the Skibidiverse fr fr</span>
            </p>
            
            <div className="relative">
              <Link 
                href="/home" 
                className="skibidi-button text-lg inline-block"
              >
                Enter the Yap-Zone 🚪
              </Link>
              <div className="absolute -top-5 -right-12 transform rotate-12 text-brainrot-pink font-comic text-sm animate-bounce-limited">
                Click me! I'm rizzy!
              </div>
            </div>
            
            <div className="mt-10 flex justify-center space-x-6">
              <button className="p-3 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full hover:bg-brainrot-pink hover:text-white transition-colors shadow-md">
                <Star size={24} className="text-brainrot-pink" />
              </button>
              <button className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-full hover:bg-brainrot-neon hover:text-white transition-colors shadow-md">
                <Laugh size={24} className="text-brainrot-neon" />
              </button>
              <button className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full hover:bg-brainrot-blue hover:text-white transition-colors shadow-md">
                <Sparkles size={24} className="text-brainrot-blue" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-chaos"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-pixel text-center mb-12">
            <span className="text-brainrot-purple">What's</span> <span className="text-brainrot-blue">The</span> <span className="text-brainrot-pink">Yap</span> <span className="text-brainrot-neon">About?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg border-2 border-brainrot-neon transform hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-brainrot-blue/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl animate-bounce-limited">🧠</span>
              </div>
              <h3 className="text-xl font-comic text-center mb-3 text-brainrot-blue">Read Ohio-Core Articles</h3>
              <p className="text-gray-600 text-center">
                Discover brainrot articles that'll make you go "fr fr no cap 💀". Pure Ohio vibes guaranteed or your rizz back!
              </p>
              <div className="mt-4 text-center italic text-xs text-gray-400">*Rizz cannot be refunded and is non-transferable</div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-xl shadow-lg border-2 border-brainrot-pink transform hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-brainrot-pink/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl animate-skibidi-dance">📝</span>
              </div>
              <h3 className="text-xl font-comic text-center mb-3 text-brainrot-pink">Yeet Your Own Yaps</h3>
              <p className="text-gray-600 text-center">
                Create your own skibidi content with our rizz-boosting editor. Maximum GYATT energy or it wasn't written in Ohio!
              </p>
              <div className="mt-4 text-center italic text-xs text-gray-400">*98% of content actually written in Nebraska</div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg border-2 border-brainrot-purple transform hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-brainrot-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl animate-float">📊</span>
              </div>
              <h3 className="text-xl font-comic text-center mb-3 text-brainrot-purple">Track Your Rizz Stats</h3>
              <p className="text-gray-600 text-center">
                See how much rizz your articles are getting with detailed GYATT analytics. Numbers don't lie (but Ohio doesn't exist).
              </p>
              <div className="mt-4 text-center italic text-xs text-gray-400">*All stats subject to skibidi inflation</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-pixel text-gray-800 mb-6">
              Ready to become a certified <span className="text-brainrot-neon">Yapper</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Join the most unhinged community of brainrot enjoyers. It's giving Ohio energy fr fr 🫡
            </p>
            <div className="relative">
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/signup" className="skibidi-button relative">
                  Sign Up Now 🚀
                  <span className="absolute -top-4 -right-4 animate-spin-slow text-2xl">✨</span>
                </Link>
                <Link href="/home" className="ohio-button relative">
                  Browse Articles 👀
                  <span className="absolute -top-6 right-0 transform rotate-12 text-xs font-comic text-brainrot-pink animate-bounce-limited">
                    100% real no cap
                  </span>
                </Link>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 italic">
                No Skibidi Toilets were harmed in the making of this website
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fun Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-brainrot-blue">69,420</p>
              <p className="text-sm text-gray-500">Rizzy Articles</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-brainrot-pink">42,069</p>
              <p className="text-sm text-gray-500">Yappy Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-brainrot-neon">∞</p>
              <p className="text-sm text-gray-500">Skibidi Moments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-brainrot-purple">0</p>
              <p className="text-sm text-gray-500">Ohio Deniers</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;

'use client'

import React, { useState, useEffect } from 'react';
import BrainrotProgress from '@/components/BrainrotProgress';

const LoadingScreen: React.FC = () => {
  const [catchphrase, setCatchphrase] = useState('Loading brainrot, please wait... 🫡');
  
  const funnyLoadingPhrases = [
    "Downloading Ohio vibes... 🗺️",
    "Calculating maximum rizz levels... 💯",
    "Feeding the Skibidi Toilets... 🚽",
    "Teaching AI how to be yappy... 🧠",
    "Making things GYATT... 😳",
    "Filling the backrooms with memes... 🏚️",
    "Applying rizz to server... 💀"
  ];
  
  useEffect(() => {
    // Cycle through funny loading phrases
    const phraseCycle = setInterval(() => {
      const randomPhrase = funnyLoadingPhrases[Math.floor(Math.random() * funnyLoadingPhrases.length)];
      setCatchphrase(randomPhrase);
    }, 800);
    
    return () => {
      clearInterval(phraseCycle);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl md:text-5xl font-pixel text-center mb-8">
        <span className="text-brainrot-pink">yapology</span>
        <span className="text-brainrot-neon">.tech</span>
      </h1>
      <div className="w-full max-w-md">
        <BrainrotProgress />
      </div>
      <p className="mt-6 font-comic text-brainrot-blue animate-pulse">{catchphrase}</p>
    </div>
  );
};

export default LoadingScreen; 
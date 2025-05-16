'use client'
import React, { useState, useEffect } from 'react';

const MEMES = [
  'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg',
  'https://i.kym-cdn.com/photos/images/newsfeed/001/499/826/2f0.png',
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/031/744/cover1.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg'
];

interface FloatingMeme {
  id: number;
  image: string;
  style: React.CSSProperties;
}

const MemeGenerator: React.FC = () => {
  const [memes, setMemes] = useState<FloatingMeme[]>([]);
  
  const spawnMeme = () => {
    if (memes.length < 3) {
      const newMeme: FloatingMeme = {
        id: Date.now(),
        image: MEMES[Math.floor(Math.random() * MEMES.length)],
        style: {
          left: `${Math.random() * 70 + 10}%`,
          top: `${Math.random() * 70 + 10}%`,
          transform: `rotate(${Math.random() * 20 - 10}deg) scale(${Math.random() * 0.3 + 0.7})`,
          opacity: 0.9,
          zIndex: 100
        }
      };
      
      setMemes(prev => [...prev, newMeme]);
      
      // Remove meme after a few seconds
      setTimeout(() => {
        setMemes(prev => prev.filter(m => m.id !== newMeme.id));
      }, 4000);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to spawn a meme
        spawnMeme();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      {memes.map(meme => (
        <div 
          key={meme.id}
          className="fixed w-32 h-32 transition-all duration-300 cursor-pointer"
          style={meme.style}
          onClick={() => {
            setMemes(memes.filter(m => m.id !== meme.id));
            // Play sound effect
            const audio = new Audio('https://www.myinstants.com/media/sounds/vine-boom.mp3');
            audio.volume = 0.3;
            audio.play().catch(e => console.log('Audio play failed: browser requires user interaction first'));
          }}
        >
          <img 
            src={meme.image} 
            alt="Random meme" 
            className="w-full h-full object-contain rounded-md shadow-lg animate-pulse"
          />
        </div>
      ))}
    </>
  );
};

export default MemeGenerator;

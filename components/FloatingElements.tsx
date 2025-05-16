'use client'

import React, { useState, useEffect } from 'react';

interface FloatingEmoji {
  id: number;
  emoji: string;
  style: React.CSSProperties;
}

const EMOJIS = ['💀', '🔥', '🫡', '😭', '🚽', '👁️', '🥶', '😳', '💯', '🤯', '💪'];

const FloatingElements: React.FC = () => {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  // Spawn a new emoji every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (emojis.length < 8) { // Limit total emojis for performance
        const newEmoji: FloatingEmoji = {
          id: Date.now(),
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          style: {
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 80}%`,
            fontSize: `${Math.random() * 1 + 1.5}rem`,
            animationDuration: `${Math.random() * 3 + 3}s`,
            animationDelay: `${Math.random()}s`,
            zIndex: 50,
          }
        };
        
        setEmojis(prev => [...prev, newEmoji]);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [emojis.length]);
  
  // Remove emojis after they've been around for a while
  useEffect(() => {
    if (emojis.length > 0) {
      const timeout = setTimeout(() => {
        setEmojis(prev => prev.slice(1));
      }, 6000);
      
      return () => clearTimeout(timeout);
    }
  }, [emojis]);
  
  return (
    <>
      {emojis.map(emoji => (
        <div
          key={emoji.id}
          className="floating-emoji"
          style={emoji.style}
          onClick={() => setEmojis(emojis.filter(e => e.id !== emoji.id))}
        >
          {emoji.emoji}
        </div>
      ))}
    </>
  );
};

export default FloatingElements;

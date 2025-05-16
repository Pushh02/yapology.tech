"use client";

import React, { useState, useEffect } from 'react';

interface BrainrotProgressProps {
  isLoading?: boolean;
}

const BrainrotProgress: React.FC<BrainrotProgressProps> = ({ isLoading = true }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isLoading && progress < 100) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const increment = Math.random() * 15;
          const newProgress = prev + increment;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }
  }, [isLoading, progress]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-1">
        <span className="font-pixel text-sm text-brainrot-pink">Brainrot Loading...</span>
        <span className="font-pixel text-sm text-brainrot-neon">{Math.round(progress)}%</span>
      </div>
      <div className="rizz-progress">
        <div 
          className="rizz-progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="sparkle"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${progress - 5 + Math.random() * 10}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 1 + 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BrainrotProgress;

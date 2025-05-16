'use client'

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="text-center max-w-lg">
        <div className="glitch-text text-9xl font-pixel mb-6">404</div>
        
        <h1 className="text-3xl md:text-4xl font-comic mb-6 text-brainrot-pink">
          Page not found fr fr 💀
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          This page is hiding in the backrooms or doesn't exist. No rizz detected at this URL.
        </p>
        
        <div className="mb-8">
          <img 
            src="https://i.kym-cdn.com/entries/icons/original/000/022/940/mockingspongebobbb.jpg" 
            alt="404 meme" 
            className="w-64 h-64 object-cover mx-auto rounded-lg"
          />
        </div>
        
        <Link 
          href="/" 
          className="skibidi-button inline-block text-lg"
        >
          Go Back to Ohio 🏠
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

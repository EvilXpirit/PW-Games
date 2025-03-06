'use client';
import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameCarouselProps {
  games: Game[];
}

const GameCarousel: React.FC<GameCarouselProps> = ({ games }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Configure the number of items to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(5);
  
  const next = () => {
    if (currentIndex < games.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Swipe functionality for mobile
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      next();
    }
    
    if (isRightSwipe) {
      prev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(4);
      } else {
        setItemsToShow(5);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If the current index becomes invalid after a resize, reset it
  useEffect(() => {
    if (currentIndex > games.length - itemsToShow) {
      setCurrentIndex(Math.max(0, games.length - itemsToShow));
    }
  }, [itemsToShow, games.length, currentIndex]);

  return (
    <div className="relative px-4 sm:px-8">
      {/* Navigation arrows - Hidden on small screens, visible on medium and up */}
      <button 
        onClick={prev}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full disabled:opacity-50 hidden sm:flex items-center justify-center"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Carousel Container with Touch Events for Mobile */}
      <div 
        className="overflow-hidden" 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {games.map((game) => (
            <div 
              key={game.id} 
              className="flex-shrink-0 px-1 sm:px-2" 
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={next}
        disabled={currentIndex >= games.length - itemsToShow}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full disabled:opacity-50 hidden sm:flex items-center justify-center"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Mobile indicators - Only visible on small screens */}
      <div className="flex justify-center mt-4 space-x-2 sm:hidden">
        {Array.from({ length: Math.ceil(games.length / itemsToShow) }).map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index * itemsToShow)}
            className={`w-2 h-2 rounded-full ${
              index === Math.floor(currentIndex / itemsToShow) ? 'bg-green-500' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
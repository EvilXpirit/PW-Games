import React from 'react';
import { Game } from '../types';
import Link from 'next/link';
// import Image from 'next/image';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link href={game.link} className="block">
      <div className="relative rounded-lg overflow-hidden group bg-gray-800 h-36 sm:h-48 md:h-56 transition-transform duration-200 hover:scale-105 shadow-lg cursor-pointer">
        {/* Game Image */}
        <div className="relative w-full h-full">
          {/* Using the image path from game data */}
          <div 
            className="w-full h-full bg-gray-700"
            style={{
              backgroundImage: `url(${game.image})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Fallback if image fails to load */}
            <div className="absolute inset-0 bg-gray-700 opacity-0"></div>
          </div>
          
          {/* Tag (if exists) - Responsive size adjustments */}
          {game.tag && (
            <div className={`absolute top-1 sm:top-2 left-1 sm:left-2 ${game.tagColor || 'bg-blue-500'} text-xs font-bold py-0.5 px-1 sm:py-1 sm:px-2 rounded-sm`}>
              {game.tag}
            </div>
          )}
        </div>
        
        {/* Game Title Overlay - Adjusted padding for smaller screens */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 sm:p-3">
          <h3 className="text-white font-medium text-xs sm:text-sm md:text-base truncate">{game.title}</h3>
        </div>
        
        {/* Play Button for Mobile - Visible Without Hover */}
        <div className="absolute top-1 right-1 sm:hidden">
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        {/* Hover Play Button - Hidden on Mobile, Visible on Hover for Larger Screens */}
        <div className="absolute inset-0 bg-black/40 items-center justify-center hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transform transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
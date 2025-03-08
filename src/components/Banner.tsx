import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 h-96 sm:h-80 md:h-108">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl z-1 relative">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            When Gaming Meets Learning
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            Discover and play hundreds of free Educational games with friends
          </p>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-colors">
            Play Now
          </button>
        </div>
      </div>

      {/* Background image for mobile */}
      <div className="absolute right-0 bottom-0 w-full h-full md:hidden opacity-10 z-0">
        <img
            src="/alakhPandey.png"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right decorative element - only shown on md and larger */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full hidden md:block opacity-50">
        <div className="w-full h-full bg-contain bg-no-repeat bg-right-bottom">
          <img
            src="/alakhPandey.png"
            alt="Alakh Pandey"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Left decorative element - only shown on md and larger */}
      <div className="absolute left-0 bottom-0 w-1/3 h-full hidden md:block opacity-20">
        <img
          src="/Video-Game-Transparent-Images.png"
          alt="Game Controller"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
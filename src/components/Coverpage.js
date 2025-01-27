import React from 'react';

const Coverpage = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-[#f9f9f9] flex flex-col items-center justify-between py-8">
      {/* Top Section with Collaborate */}
      <div className="w-full flex justify-center mt-4">
        <PillarButton text="Collaborate" />
      </div>

      {/* Middle Section with Logo and Other Pillars */}
      <div className="relative w-full flex-1 my-8 pb-16 sm:pb-20 md:pb-24"> {/* Added padding bottom for spacing */}
        {/* Logo */}
        <img 
          src="/nutrition_logo333.png" 
          alt="Logo" 
          className="absolute w-40 md:w-64 lg:w-80 h-auto object-contain z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Side Pillars */}
        <div className="absolute left-[10%] top-[60%] -translate-x-1/2 -translate-y-1/2">
          <PillarButton text="Convene" />
        </div>
        
        <div className="absolute left-[25%] top-[30%] -translate-x-1/2 -translate-y-1/2">
          <PillarButton text="Celebrate" />
        </div>
        
        <div className="absolute right-[25%] top-[30%] translate-x-1/2 -translate-y-1/2">
          <PillarButton text="Connect" />
        </div>
        
        <div className="absolute right-[10%] top-[60%] translate-x-1/2 -translate-y-1/2">
          <PillarButton text="Coach" />
        </div>
      </div>

      {/* Bottom Tagline with increased spacing */}
      <div className="w-full text-center px-4 mt-8 sm:mt-12 md:mt-16"> {/* Added margin top for spacing */}
        <p className="text-sm md:text-lg lg:text-xl text-[#135127] font-bold italic max-w-2xl mx-auto">
          "Bound by Purpose, United for Nutrition : A Fellowship to Nourish Generations"
        </p>
      </div>
    </div>
  );
};

// Separate component for pillar buttons to maintain consistency
const PillarButton = ({ text }) => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-xl font-bold text-[#135127] hover:bg-[#f0f0f0] transition-colors cursor-pointer">
    {text}
  </div>
);

export default Coverpage;
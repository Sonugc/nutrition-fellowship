// Coverpage-right.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoverpageRight = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      id: 1,
      image: "/KeyHighlights/NFNbanner.jpeg",
      topic: "Jan 17 Documents",
      description: "The documents from the 2nd Nutrition Fellowship meeting",
      link: "/nfn2ndmeetdocs"
    },
    {
      id: 2,
      image: "/KeyHighlights/Dr. RP Bichha.jpg",
      topic: "Dr. RP Bichha Speech",
      description: "The speech given by Dr. RP Bichha at the 2nd Nutrition Fellowship meeting",
      link: "/drbichhaspeech"
    },
    {
      id: 3,
      image: "/KeyHighlights/Miriam Krantz.jpg",
      topic: "Miriam Krantz Speech",
      description: "The speech given by Miriam Krantz at the 2nd Nutrition Fellowship meeting",
      link: "/miriamkrantzspeech"
    },
    {
      id: 4,
      image: "/KeyHighlights/NutritionDashboard.png",
      topic: "Nutrition Dashboard",
      description: "The Nutrition Dashboard of Nepal",
      link: "/nutritiondashboard"
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-50 p-8 overflow-y-auto">
      <h1 className="text-[22px] font-bold mb-4">Key Highlights</h1>
      <div className="space-y-2">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(highlight.link)}
          >
            <div className="flex justify-start items-center space-x-4">
              <img
                src={highlight.image}
                alt={highlight.topic}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className='h-[75px] w-auto'>
                <span className="text-[16px]">{highlight.topic}</span>
                <p className="text-[14px] text-gray-600">{highlight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverpageRight;

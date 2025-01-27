import React from 'react';

const Thoughts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-10 text-center">
        {/* Center container for the text */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-2">
            PLACE YOUR THOUGHTS
          </h1>
          <p className="text-lg sm:text-xl text-green-800 mb-6">
            We would love to hear feedbacks and questions from your end.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-green-100/80 rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
              />
            </div>
            
            <div>
              <textarea
                placeholder="Your Thoughts"
                rows="4"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors resize-y min-h-[100px]"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;


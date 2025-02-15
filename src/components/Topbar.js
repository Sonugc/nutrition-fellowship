import React from 'react';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-white py-0 px-4 border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/nutrition_logo333.png" 
              alt="Nutrition Logo" 
              className="h-[80px] w-auto"
            />
          </div>

          {/* Right side content */}
          <div className="flex items-center space-x-6">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572729923914"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/nutfellowship/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/nutfellowship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Vertical Separator */}
            <div className="h-5 w-px bg-gray-300"></div>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nutfellowship@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">nutfellowship@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
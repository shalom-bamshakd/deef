import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-purple-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side: Logo & Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Deaf Dev Hub</h3>
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#community" className="hover:underline">Community</a>
            </li>
            <li>
              <a href="#successstory" className="hover:underline">Success Story</a>
            </li>
          </ul>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-center text-sm text-purple-200">
          © {new Date().getFullYear()} Deaf Dev Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

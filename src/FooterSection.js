import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-purple-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl font-bold mb-4 md:mb-0">
            Deaf Dev Hub
          </h3>
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
        <div className="text-center mt-6 text-sm text-purple-200">
          © {new Date().getFullYear()} Deaf Dev Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

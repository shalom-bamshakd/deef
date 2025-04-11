import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-purple-700 text-white px-8 py-4 z-50 shadow-md">
        <ul className="flex justify-between items-center font-semibold">
          <li>
            <h1 className="text-3xl font-bold text-gray-300">
              <span className="text-white">Deaf</span>Developers
            </h1>
          </li>
          <div className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#community" className="hover:text-gray-400">Community</a>
            </li>
            <li>
              <a href="#successstory" className="hover:text-gray-400">Success Story</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

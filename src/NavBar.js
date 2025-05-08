import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-purple-700 text-white px-6 py-4 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-300">
          <span className="text-white">Deaf</span>Developers
        </h1>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
            <Link to="home" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="community" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              Community
            </Link>
          </li>
          <li>
            <Link to="success-stories" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              Success Story
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-4 items-center font-semibold md:hidden">
          <li>
            <Link onClick={toggleMenu} to="home" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="about" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="community" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              Community
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} to="success-stories" smooth duration={500} offset={-80} className="hover:text-gray-300 cursor-pointer">
              Success Story
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

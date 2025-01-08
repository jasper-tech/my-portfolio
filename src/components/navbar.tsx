
"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-blue-300">
            JasperTech
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
          <Link href="/portfolio" className="hover:text-blue-300">
            Portfolio
          </Link>
        </div>
        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-300">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-300">
            Contact
          </Link>
          <Link href="/portfolio" className="block hover:text-blue-300">
            Portfolio
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

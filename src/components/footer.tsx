"use client";

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">&copy; 2025 JasperTech</p>
          <p className="text-sm text-gray-400">All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex space-x-6 justify-center md:justify-end">
            <Link href="/about" className="text-gray-400 hover:text-blue-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-blue-300">
              Contact
            </Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-blue-300">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-blue-300">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

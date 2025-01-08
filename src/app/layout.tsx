"use client";
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import { ReactNode } from 'react';
import '../app/globals.css'; 


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang ="en">
      <body>
      <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>

      </body>
      
    </html>
   
  );
};

export default Layout;


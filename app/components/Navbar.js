"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
        
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.webp" alt="Matrix Logo" width={180}  height={50} className="object-contain" priority />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="text-slate-600 hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">About Us</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition">Services</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">Contact</Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact" className="bg-blue-600 text-white px-6 h-12 rounded-full font-medium inline-flex items-center justify-center hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Let's Talk
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/*Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 pt-4 pb-6 space-y-3">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">Home</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">About Us</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">Services</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-blue-600 text-white text-center py-3 rounded-xl font-medium">Let's Talk</Link>
        </div>
      )}
    </nav>
  );
}

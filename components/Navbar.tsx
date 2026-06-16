"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-700 border-b border-zinc-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="h-10 w-10 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-amber-400 bg-zinc-600 shadow-sm">
              <img 
                src="/logo.png" 
                alt="Study2Passport" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Study2Passport
              </span>
              <span className="text-[10px] text-zinc-400 -mt-0.5 font-medium tracking-[2px]">YOUR GLOBAL EDUCATION PARTNER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-zinc-300 hover:text-amber-400 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-500 active:bg-amber-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-zinc-300 hover:bg-zinc-600 active:bg-zinc-500 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-600 bg-zinc-700 py-6 flex flex-col gap-1 text-base font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={closeMenu}
                className="px-1 py-3 text-zinc-300 hover:text-amber-400 active:bg-zinc-600 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="mt-4 mx-1 flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all"
            >
              Book Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

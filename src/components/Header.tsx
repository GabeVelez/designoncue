"use client";

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          DesignOnCue
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#work" className="hover:text-slate-300 transition-colors">Work</a>
          <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
          <a href="#process" className="hover:text-slate-300 transition-colors">Process</a>
          <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-slate-100 transition-colors">
            Start a project
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="px-4 py-4 space-y-4">
            <a href="#work" className="block hover:text-slate-300 transition-colors">Work</a>
            <a href="#services" className="block hover:text-slate-300 transition-colors">Services</a>
            <a href="#process" className="block hover:text-slate-300 transition-colors">Process</a>
            <a href="#about" className="block hover:text-slate-300 transition-colors">About</a>
            <button className="w-full bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
              Start a project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
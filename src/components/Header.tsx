"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = {
    color: 'var(--brand-orange)',
    transition: 'color 0.2s ease'
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--brand-yellow)';
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--brand-orange)';
  };

  return (
    <header style={{ backgroundColor: 'var(--brand-dark-burgundy)' }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="DesignOnCue"
            width={180}
            height={35}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#work"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Work
          </a>
          <a
            href="#services"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Services
          </a>
          <a
            href="#process"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Process
          </a>
          <a
            href="#about"
            style={linkStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            About
          </a>
          <button
            className="px-6 py-2 font-semibold uppercase transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--brand-orange)',
              color: 'var(--brand-dark-burgundy)',
              borderRadius: '999px'
            }}
          >
            Start a project
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          style={{ color: 'var(--brand-orange)' }}
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
        <div style={{ backgroundColor: 'var(--brand-light-burgundy)' }}>
          <nav className="px-4 py-4 space-y-4">
            <a
              href="#work"
              className="block"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Work
            </a>
            <a
              href="#services"
              className="block"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Services
            </a>
            <a
              href="#process"
              className="block"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Process
            </a>
            <a
              href="#about"
              className="block"
              style={linkStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              About
            </a>
            <button
              className="w-full px-6 py-3 font-semibold uppercase transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--brand-orange)',
                color: 'var(--brand-dark-burgundy)',
                borderRadius: '999px'
              }}
            >
              Start a project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

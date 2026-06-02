import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a2218] border-b border-[rgba(93,202,165,0.12)] sticky top-0 z-50 px-6 py-4 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 text-[#f0ede4] font-medium text-base tracking-wide">
          <div className="w-8 h-8 bg-[rgba(29,158,117,0.25)] border border-[rgba(93,202,165,0.3)] rounded-xl flex items-center justify-center text-base">
            ☽
          </div>
          NourCoran
        </Link>

        

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#features" className="text-[rgba(240,237,228,0.55)] hover:text-[#f0ede4] transition-colors duration-200">
              Fonctionnalités
            </a>
          </li>
          <li>
            <a href="#niveaux" className="text-[rgba(240,237,228,0.55)] hover:text-[#f0ede4] transition-colors duration-200">
              Niveaux
            </a>
          </li>
          <li>
            <a href="#comment" className="text-[rgba(240,237,228,0.55)] hover:text-[#f0ede4] transition-colors duration-200">
              Comment ça marche
            </a>
          </li>
          <li>
            <Link
              to="/connexion"
              className="ml-2 bg-[#1D9E75] hover:bg-[#0F6E56] text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
            >
              Commencer gratuitement
            </Link>
          </li>
        </ul>

        {/* BURGER MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 bg-[rgba(29,158,117,0.12)] border border-[rgba(93,202,165,0.2)] hover:bg-[rgba(29,158,117,0.25)] rounded-lg flex items-center justify-center text-[rgba(240,237,228,0.6)] hover:text-[#f0ede4] transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-[rgba(93,202,165,0.1)]">
          <ul className="flex flex-col gap-1 text-sm">
            {[
              { label: "Fonctionnalités", href: "#features" },
              { label: "Niveaux", href: "#niveaux" },
              { label: "Comment ça marche", href: "#comment" },
            ].map((item) => (
              <li key={item.href}>
                
                 <a href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-[rgba(240,237,228,0.55)] hover:text-[#f0ede4] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/connexion"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#1D9E75] hover:bg-[#0F6E56] text-white font-medium py-2.5 rounded-lg transition-colors"
              >
                Commencer gratuitement
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
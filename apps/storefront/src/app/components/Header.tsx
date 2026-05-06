"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-surface-1 border-b border-surface-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-white">Autopro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/search" className="text-gray-300 hover:text-primary transition-colors">
              Parts
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/garage" className="text-gray-300 hover:text-primary transition-colors">
              My Garage
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search parts, VIN, services..."
                className="w-full bg-canvas border border-surface-2 rounded-lg py-2 px-4 pl-10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              />
              <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
            </div>
          </div>

          {/* Right Side - Cart & Account */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative text-gray-300 hover:text-primary transition-colors">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link 
              href="/login" 
              className="hidden md:block bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-primary"
            >
              <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-surface-2 py-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search parts, VIN, services..."
                className="w-full bg-canvas border border-surface-2 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link href="/search" className="text-gray-300 hover:text-primary transition-colors py-2">
                🔧 Parts
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-primary transition-colors py-2">
                🛠️ Services
              </Link>
              <Link href="/garage" className="text-gray-300 hover:text-primary transition-colors py-2">
                🚗 My Garage
              </Link>
              <Link href="/login" className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-medium transition-colors text-center mt-2">
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
    }

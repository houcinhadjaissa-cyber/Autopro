"use client";

import { useState } from "react";
import Link from "next/link";

// Demo parts data (will come from database later)
const demoParts = [
  { id: 1, name: "Brake Pad Set - Front", brand: "Bosch", price: 4500, currency: "DZD", compatibility: "Universal", rating: 4.8, reviews: 124, image: "🔧" },
  { id: 2, name: "Oil Filter", brand: "Mann", price: 1200, currency: "DZD", compatibility: "BMW 3 Series", rating: 4.9, reviews: 89, image: "⚙️" },
  { id: 3, name: "Air Filter", brand: "K&N", price: 3200, currency: "DZD", compatibility: "Universal", rating: 4.7, reviews: 56, image: "🌀" },
  { id: 4, name: "Spark Plugs (Set of 4)", brand: "NGK", price: 2800, currency: "DZD", compatibility: "Toyota Corolla", rating: 4.9, reviews: 201, image: "⚡" },
  { id: 5, name: "Serpentine Belt", brand: "Gates", price: 1800, currency: "DZD", compatibility: "Universal", rating: 4.6, reviews: 34, image: "🔗" },
  { id: 6, name: "Alternator", brand: "Denso", price: 18500, currency: "DZD", compatibility: "Honda Civic", rating: 4.8, reviews: 67, image: "🔋" },
];

const categories = ["All Parts", "Brakes", "Filters", "Engine", "Electrical", "Suspension", "Body Parts"];

export default function SearchPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Parts");
  const [sortBy, setSortBy] = useState("popular");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className="min-h-screen bg-canvas">
      {/* Page Header */}
      <div className="bg-surface-1 border-b border-surface-2 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Find Your Parts
          </h1>
          
          {/* Vehicle Selector Bar */}
          <div className="flex flex-wrap gap-3">
            <select className="bg-canvas border border-surface-2 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none">
              <option>Select Make</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>Honda</option>
              <option>Peugeot</option>
              <option>Renault</option>
            </select>
            <select className="bg-canvas border border-surface-2 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none">
              <option>Select Model</option>
            </select>
            <select className="bg-canvas border border-surface-2 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none">
              <option>Select Year</option>
            </select>
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-surface-1 rounded-lg border border-surface-2 p-4 sticky top-20">
              <h3 className="font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "text-gray-400 hover:text-white hover:bg-surface-2"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <hr className="border-surface-2 my-4" />

              <h3 className="font-semibold text-white mb-4">Price Range</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="50000"
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>0 DZD</span>
                  <span>50,000 DZD</span>
                </div>
              </div>

              <hr className="border-surface-2 my-4" />

              <h3 className="font-semibold text-white mb-4">Brand</h3>
              <div className="space-y-2">
                {["Bosch", "Mann", "NGK", "Denso", "Gates"].map((brand) => (
                  <label key={brand} className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
                    <input type="checkbox" className="accent-primary" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sort */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden bg-surface-1 border border-surface-2 px-4 py-2 rounded-lg text-white"
              >
                ☰ Filters
              </button>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-surface-1 border border-surface-2 rounded-lg px-3 py-2 text-white text-sm focus:border-primary focus:outline-none"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-gray-400 mb-4">
              Showing <span className="text-white font-medium">{demoParts.length}</span> parts
            </p>

            {/* Parts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {demoParts.map((part) => (
                <Link
                  key={part.id}
                  href={`/part/${part.id}`}
                  className="bg-surface-1 rounded-lg border border-surface-2 p-4 hover:border-primary/50 transition-all group"
                >
                  {/* Part Image Placeholder */}
                  <div className="bg-canvas rounded-lg h-40 flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform">
                    {part.image}
                  </div>
                  
                  {/* Part Info */}
                  <div>
                    <p className="text-xs text-primary font-medium mb-1">{part.brand}</p>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      {part.name}
                    </h3>
                    
                    {/* Compatibility Badge */}
                    <div className="inline-flex items-center bg-canvas px-2 py-1 rounded text-xs text-gray-400 mb-3">
                      🚗 {part.compatibility}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white text-sm">{part.rating}</span>
                      <span className="text-gray-500 text-sm">({part.reviews})</span>
                    </div>
                    
                    {/* Price & Add to Cart */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {part.price.toLocaleString()} <span className="text-sm">{part.currency}</span>
                      </span>
                      <button className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-2 rounded-lg transition-colors">
                        🛒
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-surface-1 hover:bg-surface-2 border border-surface-2 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Load More Parts
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
            }

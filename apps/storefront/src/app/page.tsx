"use client";

import React, { useState } from "react";

// Inline SVGs for bulletproof icons
const FilterIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3 h-3 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
  </svg>
);

const initialParts = [
  { id: 1, name: "Premium Ceramic Brake Pads", oem: "OEM-74829", price: 45.99, category: "Brakes", fit: true },
  { id: 2, name: "Synthetic Oil Filter", oem: "OEM-11023", price: 12.50, category: "Filters", fit: true },
  { id: 3, name: "Performance Ignition Coils", oem: "OEM-99382", price: 89.99, category: "Engine", fit: true },
  { id: 4, name: "Heavy Duty Shock Absorbers", oem: "OEM-44021", price: 120.00, category: "Suspension", fit: false },
  { id: 5, name: "Air Intake Filter", oem: "OEM-33210", price: 24.99, category: "Filters", fit: true }
];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedItems, setAddedItems] = useState<{ [key: number]: true }>({});

  const categories = ["All", "Brakes", "Filters", "Engine", "Suspension"];

  const filteredParts = activeCategory === "All" 
    ? initialParts 
    : initialParts.filter(p => p.category === activeCategory);

  const handleAdd = (id: number) => {
    setAddedItems(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: undefined } as any));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      {/* Search & Compatibility Header */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Parts Catalog</h1>
        <div className="grid grid-cols-3 gap-2">
          <select className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 outline-none">
            <option>BMW</option>
            <option>Audi</option>
            <option>Mercedes</option>
          </select>
          <select className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 outline-none">
            <option>3 Series</option>
            <option>5 Series</option>
          </select>
          <select className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 outline-none">
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>
      </div>

      {/* Horizontal Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar mb-4 pb-1">
        <button className="flex items-center bg-white px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-700 shadow-2xs">
          <FilterIcon /> Filters
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? "bg-[#65a30d] text-white font-semibold shadow-xs" 
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Parts List */}
      <div className="space-y-3">
        {filteredParts.map(part => (
          <div key={part.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">{part.oem}</span>
                <h3 className="font-bold text-sm text-gray-900 mt-0.5">{part.name}</h3>
              </div>
              {part.fit ? (
                <span className="inline-flex items-center bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-100">
                  <CheckIcon /> 100% Fit
                </span>
              ) : (
                <span className="inline-flex items-center bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-100">
                  Universal
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-50">
              <div className="text-lg font-black text-gray-900">${part.price.toFixed(2)}</div>
              <button
                onClick={() => handleAdd(part.id)}
                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                  addedItems[part.id] 
                    ? "bg-green-600 text-white" 
                    : "bg-[#65a30d] text-white active:scale-95"
                }`}
              >
                {addedItems[part.id] ? "✓ Added to Cart" : "+ Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

const SearchIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function SearchPage() {
  const [added, setAdded] = useState<{ [key: number]: boolean }>({});
  const [filter, setFilter] = useState("All");

  const parts = [
    { id: 1, brand: "Bosch", name: "Premium Ceramic Brake Pads", oem: "OEM-74829", price: "4,500 DZD", category: "Brakes" },
    { id: 2, brand: "Mann", name: "Synthetic Oil Filter", oem: "OEM-11023", price: "1,200 DZD", category: "Filters" },
    { id: 3, brand: "NGK", name: "Laser Iridium Spark Plugs", oem: "OEM-99382", price: "8,500 DZD", category: "Engine" },
    { id: 4, brand: "Sachs", name: "Heavy Duty Shock Absorber", oem: "OEM-44021", price: "12,000 DZD", category: "Suspension" }
  ];

  const filtered = filter === "All" ? parts : parts.filter(p => p.category === filter);

  const handleAdd = (id: number) => {
    setAdded(prev => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      {/* Search Header */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h1 className="text-xl font-bold text-gray-900 mb-3">Find Your Parts</h1>
        
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 mb-3">
          <SearchIcon />
          <input type="text" placeholder="Search by OEM, Part, or Keyword..." className="bg-transparent pl-2 text-xs w-full outline-none text-gray-900" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <select className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 outline-none"><option>Select Make</option><option>BMW</option><option>Audi</option></select>
          <select className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 outline-none"><option>Model</option><option>3 Series</option></select>
          <select className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-700 outline-none"><option>Year</option><option>2023</option></select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex space-x-2 overflow-x-auto no-scrollbar mb-4 pb-1">
        {["All", "Brakes", "Filters", "Engine", "Suspension"].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filter === cat ? "bg-[#65a30d] text-white shadow-xs" : "bg-white text-gray-600 border border-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Parts List */}
      <div className="space-y-3">
        {filtered.map(p => (
          <div key={p.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black text-green-600 uppercase tracking-wider">{p.brand}</span>
                <h3 className="font-bold text-sm text-gray-900 mt-0.5">{p.name}</h3>
                <p className="text-[10px] text-gray-400 font-mono mt-0.5">{p.oem}</p>
              </div>
              <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100">Guaranteed Fit</span>
            </div>

            <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-50">
              <div className="text-base font-black text-gray-900">{p.price}</div>
              <button onClick={() => handleAdd(p.id)} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${added[p.id] ? "bg-green-600 text-white" : "bg-[#65a30d] text-white active:scale-95"}`}>
                {added[p.id] ? "✓ Added to Cart" : "+ Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
                  }

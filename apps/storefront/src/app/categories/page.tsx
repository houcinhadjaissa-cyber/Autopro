"use client";

import React from "react";

export default function CategoriesPage() {
  const cats = [
    { name: "Braking System", desc: "Pads, Discs, Calipers & Sensors", count: "1,240 parts" },
    { name: "Filters & Maintenance", desc: "Oil, Air, Cabin & Fuel Filters", count: "890 parts" },
    { name: "Engine & Ignition", desc: "Spark Plugs, Belts & Gaskets", count: "2,100 parts" },
    { name: "Suspension & Steering", desc: "Shock Absorbers & Arms", count: "650 parts" },
    { name: "Electrical & Lighting", desc: "Batteries, Bulbs & Alternators", count: "940 parts" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <h1 className="text-xl font-bold text-gray-900 mb-1">Browse Categories</h1>
      <p className="text-xs text-gray-400 mb-4">Guaranteed 100% fit for your saved garage.</p>

      <div className="space-y-2">
        {cats.map((cat, i) => (
          <a key={i} href="/search" className="block bg-white rounded-xl p-4 border border-gray-100 shadow-2xs active:scale-98 transition-transform">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xs text-gray-900">{cat.name}</h3>
                <p className="text-[11px] text-gray-500 mt-0.5">{cat.desc}</p>
              </div>
              <span className="text-[10px] font-bold bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded-lg">
                {cat.count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

const WrenchIcon = () => (
  <svg className="w-4 h-4 text-[#65a30d] mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.243-4.242l2.878-2.879m7 7L12 12" />
  </svg>
);

export default function MechanicsPage() {
  const [bookedId, setBookedId] = useState<number | null>(null);

  const garages = [
    { id: 1, name: "Autopro Certified Garage - Downtown", dist: "1.2 miles", rating: "★ 4.9", nextSlot: "Today, 2:00 PM" },
    { id: 2, name: "Precision Auto Works", dist: "3.5 miles", rating: "★ 4.8", nextSlot: "Tomorrow, 10:00 AM" },
    { id: 3, name: "EuroCar Express Specialists", dist: "4.1 miles", rating: "★ 4.9", nextSlot: "Tomorrow, 1:30 PM" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h1 className="text-xl font-bold text-gray-900">Partner Mechanics</h1>
        <p className="text-xs text-gray-400 mt-1">Book certified installation for your parts.</p>
      </div>

      <div className="space-y-3">
        {garages.map(g => (
          <div key={g.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm text-gray-900">{g.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{g.dist} • <span className="text-amber-500 font-bold">{g.rating}</span></p>
              </div>
              <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100">
                Verified
              </span>
            </div>

            <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-50">
              <div className="text-xs text-gray-600">
                <span className="block text-[10px] text-gray-400 uppercase font-bold">Next Available</span>
                <span className="font-semibold text-gray-900">{g.nextSlot}</span>
              </div>
              <button
                onClick={() => setBookedId(g.id)}
                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                  bookedId === g.id ? "bg-green-600 text-white" : "bg-[#65a30d] text-white active:scale-95"
                }`}
              >
                {bookedId === g.id ? "✓ Slot Reserved" : "Book Install"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

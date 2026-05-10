"use client";

import React, { useState } from "react";

export default function ServicesPage() {
  const [booked, setBooked] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("All Services");

  const services = [
    { id: 1, name: "Full Car Service", garage: "AutoCare Premium Garage", price: "8,500 DZD", rating: "★ 4.9 (156)", time: "3-4 hours", type: "Maintenance" },
    { id: 2, name: "Brake Pad Replacement", garage: "QuickStop Mechanics", price: "3,000 DZD", rating: "★ 4.8 (92)", time: "1-2 hours", type: "Brakes" },
    { id: 3, name: "Engine Diagnostics & Scan", garage: "EuroTech Specialists", price: "4,500 DZD", rating: "★ 4.9 (210)", time: "45 mins", type: "Diagnostics" }
  ];

  const filtered = activeTab === "All Services" ? services : services.filter(s => s.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h1 className="text-xl font-bold text-gray-900">Book a Service</h1>
        <p className="text-xs text-gray-400 mt-0.5">Certified partner garages with instant scheduling.</p>

        <div className="mt-3 space-y-2">
          <input type="text" placeholder="📍 Enter your location..." className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs outline-none text-gray-900 font-medium" />
          <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-2.5 text-xs outline-none text-gray-900 font-medium"><option>Select Saved Vehicle (BMW 320i)</option></select>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto no-scrollbar mb-4 pb-1">
        {["All Services", "Maintenance", "Brakes", "Diagnostics"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab ? "bg-[#65a30d] text-white shadow-xs" : "bg-white text-gray-600 border border-gray-200"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-3">
        {filtered.map(s => (
          <div key={s.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm text-gray-900">{s.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{s.garage}</p>
                <div className="flex items-center space-x-3 mt-2 text-[11px] text-gray-400 font-medium">
                  <span className="text-amber-500 font-bold">{s.rating}</span>
                  <span>⏱️ {s.time}</span>
                </div>
              </div>
              <span className="text-sm font-black text-[#65a30d]">{s.price}</span>
            </div>

            <button
              onClick={() => setBooked(s.id)}
              className={`w-full mt-4 py-2.5 rounded-xl font-bold text-xs transition-all ${booked === s.id ? "bg-green-600 text-white" : "bg-[#65a30d] text-white active:scale-95"}`}
            >
              {booked === s.id ? "✓ Appointment Confirmed" : "Book Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

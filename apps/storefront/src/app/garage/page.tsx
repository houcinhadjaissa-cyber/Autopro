"use client";

import React, { useState } from "react";

export default function GaragePage() {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "BMW 3 Series (G20)", year: "2021", vin: "WBA3B3C50FKXXXXXX", active: true }
  ]);
  const [make, setMake] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!make) return;
    setVehicles(prev => [...prev, { id: Date.now(), name: make, year: "2023", vin: "VIN-VERIFIED", active: false }]);
    setMake("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="flex justify-between items-center mb-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900">My Garage</h1>
          <p className="text-xs text-gray-400 mt-0.5">{vehicles.length} vehicles saved</p>
        </div>
        <span className="bg-green-50 text-green-700 font-bold text-[10px] px-2 py-1 rounded-lg border border-green-100">VIN Synchronized</span>
      </div>

      {/* Vehicle List */}
      <div className="space-y-3 mb-6">
        {vehicles.map(v => (
          <div key={v.id} className={`p-4 rounded-xl border transition-all ${v.active ? "bg-white border-[#65a30d] shadow-xs" : "bg-white border-gray-100 shadow-2xs"}`}>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Active Vehicle</span>
                <h3 className="font-bold text-sm text-gray-900 mt-0.5">{v.name}</h3>
                <p className="text-xs text-green-600 font-mono font-medium mt-1">VIN: {v.vin}</p>
              </div>
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Car Form */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs">
        <h3 className="font-bold text-xs text-gray-900 mb-2">+ Add Another Vehicle</h3>
        <form onSubmit={handleAdd} className="flex space-x-2">
          <input
            type="text"
            value={make}
            onChange={e => setMake(e.target.value)}
            placeholder="e.g., Mercedes C-Class..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs outline-none text-gray-900"
          />
          <button type="submit" className="bg-[#65a30d] text-white font-bold text-xs px-4 py-2 rounded-lg active:scale-95 shadow-2xs">
            Save Car
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

const CarIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export default function ProfilePage() {
  const [vehicles, setVehicles] = useState([
    { id: 1, make: "BMW", model: "320i", year: "2020", vin: "WBA3B3C50FKXXXXXX" }
  ]);
  const [newCarMake, setNewCarMake] = useState("");

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCarMake.trim()) return;
    setVehicles(prev => [...prev, { id: Date.now(), make: newCarMake, model: "Custom Trim", year: "2022", vin: "VIN-VERIFIED" }]);
    setNewCarMake("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-base">JD</div>
        <div>
          <h2 className="font-bold text-sm text-gray-900">John Doe</h2>
          <p className="text-xs text-gray-400">Premium Ecosystem Member</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">My Saved Garage</h3>
        
        <div className="space-y-2 mb-4">
          {vehicles.map(v => (
            <div key={v.id} className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-2xs"><CarIcon /></div>
                <div>
                  <h4 className="font-bold text-xs text-gray-900">{v.year} {v.make} {v.model}</h4>
                  <p className="text-[10px] text-green-600 font-medium">VIN: {v.vin}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded">Active</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddVehicle} className="flex space-x-2">
          <input
            type="text"
            value={newCarMake}
            onChange={e => setNewCarMake(e.target.value)}
            placeholder="Add vehicle (e.g., Audi A4)..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs outline-none text-gray-900"
          />
          <button type="submit" className="bg-[#65a30d] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-2xs active:scale-95">
            + Add
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-2xs divide-y divide-gray-50 text-xs font-medium text-gray-700">
        <div className="p-3 flex justify-between items-center"><span>Order History</span><span className="text-gray-400">&gt;</span></div>
        <div className="p-3 flex justify-between items-center"><span>Shipping Addresses</span><span className="text-gray-400">&gt;</span></div>
        <div className="p-3 flex justify-between items-center"><span>Payment Methods</span><span className="text-gray-400">&gt;</span></div>
      </div>
    </div>
  );
}

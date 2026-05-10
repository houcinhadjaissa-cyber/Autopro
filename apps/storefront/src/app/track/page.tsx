"use client";

import React, { useState } from "react";

export default function TrackPage() {
  const [orderId, setOrderId] = useState("AP-98421");
  const [searched, setSearched] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h1 className="text-xl font-bold text-gray-900">Track Order</h1>
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            value={orderId}
            onChange={e => setOrderId(e.target.value)}
            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs outline-none text-gray-900 font-bold"
          />
          <button onClick={() => setSearched(true)} className="bg-[#65a30d] text-white font-bold text-xs px-4 py-2 rounded-lg">
            Track
          </button>
        </div>
      </div>

      {searched && (
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-900">Status: <span className="text-green-600">In Transit</span></span>
            <span className="text-[10px] text-gray-400">Updated 2m ago</span>
          </div>

          {/* Progress Bar */}
          <div className="relative pt-2">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-[10px] font-bold bg-green-600 text-white px-2 py-0.5 rounded-full">Confirmed</span>
              <span className="text-[10px] font-bold bg-green-600 text-white px-2 py-0.5 rounded-full">Dispatched</span>
              <span className="text-[10px] font-bold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Delivered</span>
            </div>
            <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-gray-100">
              <div className="w-2/3 shadow-2xs bg-green-500"></div>
            </div>
          </div>

          <p className="text-xs text-gray-500">Courier: Premium Fast Dispatch • Arriving today by 6:00 PM.</p>
        </div>
      )}
    </div>
  );
}

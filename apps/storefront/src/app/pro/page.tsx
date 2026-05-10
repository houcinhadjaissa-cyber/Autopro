"use client";

import React, { useState } from "react";

export default function ProPage() {
  const [bulkCount, setBulkCount] = useState(10);
  const basePrice = 12.50; // Oil filters

  // Trade discount formula
  const discountRate = bulkCount >= 50 ? 0.30 : bulkCount >= 20 ? 0.20 : 0.10;
  const originalTotal = basePrice * bulkCount;
  const discountAmount = originalTotal * discountRate;
  const finalTotal = originalTotal - discountAmount;

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-sm mb-4">
        <span className="text-[10px] font-bold bg-[#65a30d] text-white px-2 py-0.5 rounded uppercase">B2B Trade Accounts</span>
        <h1 className="text-lg font-bold mt-1">Autopro Wholesale Portal</h1>
        <p className="text-xs text-gray-400 mt-0.5">Instant tiered pricing for registered garages.</p>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h3 className="font-bold text-xs text-gray-900 mb-2">Bulk Order Calculator: Synthetic Oil Filters</h3>
        
        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Select Quantity (Boxes)</label>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[10, 20, 50, 100].map(num => (
            <button
              key={num}
              onClick={() => setBulkCount(num)}
              className={`py-2 rounded-lg font-bold text-xs border transition-all ${bulkCount === num ? "bg-gray-900 text-white border-gray-900" : "bg-gray-50 text-gray-700 border-gray-200"}`}
            >
              {num}x
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-xs mb-4">
          <div className="flex justify-between text-gray-500"><span>Retail Total:</span><span>${originalTotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-green-600 font-bold"><span>Trade Discount ({(discountRate * 100).toFixed(0)}%):</span><span>-${discountAmount.toFixed(2)}</span></div>
          <div className="flex justify-between text-sm font-black text-gray-900 pt-2 border-t border-gray-200"><span>B2B Final Payable:</span><span>${finalTotal.toFixed(2)}</span></div>
        </div>

        <button className="w-full bg-[#65a30d] text-white font-bold py-3 rounded-xl text-xs shadow-xs active:scale-95">
          Dispatch Bulk Trade Order
        </button>
      </div>

      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs text-center">
        <p className="text-xs font-bold text-gray-800">Need 30-day credit terms?</p>
        <p className="text-[10px] text-gray-400 mt-1">Instant ecosystem underwriting available via VIN volume proof.</p>
      </div>
    </div>
  );
}

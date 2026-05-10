"use client";

import React, { useState } from "react";

export default function VinPage() {
  const [vin, setVin] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vin) return;
    setResult({
      valid: true,
      make: "BMW",
      model: "3 Series (G20)",
      engine: "2.0L Turbo",
      year: "2021"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs text-center mb-4">
        <h1 className="text-xl font-bold text-gray-900">VIN Decoder</h1>
        <p className="text-xs text-gray-500 mt-1">Enter your 17-character VIN for an exact parts match guarantee.</p>

        <form onSubmit={handleVerify} className="mt-4 space-y-3">
          <input
            type="text"
            maxLength={17}
            value={vin}
            onChange={e => setVin(e.target.value.toUpperCase())}
            placeholder="ENTER VIN HERE..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm font-bold tracking-widest text-center outline-none text-gray-900 uppercase"
          />
          <button type="submit" className="w-full bg-[#65a30d] text-white font-bold py-3 rounded-xl text-xs shadow-xs active:scale-95">
            Verify Compatibility
          </button>
        </form>
      </div>

      {result && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 animate-fade-in">
          <h3 className="text-xs font-bold text-green-800 uppercase tracking-wider mb-2">✓ Vehicle Identified</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="text-gray-500 block">Manufacturer</span><strong className="text-gray-900">{result.make}</strong></div>
            <div><span className="text-gray-500 block">Model</span><strong className="text-gray-900">{result.model}</strong></div>
            <div><span className="text-gray-500 block">Year</span><strong className="text-gray-900">{result.year}</strong></div>
            <div><span className="text-gray-500 block">Engine</span><strong className="text-gray-900">{result.engine}</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}

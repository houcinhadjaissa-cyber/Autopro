"use client";

import React, { useState } from "react";

export default function EpcPage() {
  const [selectedPart, setSelectedPart] = useState<number | null>(1);
  const [added, setAdded] = useState(false);

  const parts = [
    { id: 1, pos: "01", name: "Cylinder Head Gasket", oem: "11-12-7-580-961", price: 85.00 },
    { id: 2, pos: "02", name: "Intake Manifold Seal", oem: "11-61-7-543-242", price: 18.50 },
    { id: 3, pos: "03", name: "Exhaust Flange Stud", oem: "18-30-7-561-019", price: 4.99 }
  ];

  const current = parts.find(p => p.id === selectedPart) || parts[0];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase">7zap EPC Engine</span>
        <h1 className="text-lg font-bold text-gray-900 mt-1">Exploded View: Engine Block</h1>
        <p className="text-xs text-gray-400">Tap a diagram blueprint pin to inspect the exact OEM part.</p>
      </div>

      {/* Interactive Blueprint Visual */}
      <div className="bg-[#0f172a] rounded-2xl p-6 border border-slate-800 shadow-inner mb-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Simple crisp vector representation of an engine assembly */}
        <svg className="w-full h-48 mx-auto text-slate-400 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 9h.01M9 9h.01M12 12h.01M12 6h.01" />
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" className="text-slate-600" />
        </svg>

        {/* Blueprint Pins */}
        <div className="absolute top-12 left-1/4">
          <button onClick={() => setSelectedPart(1)} className={`w-8 h-8 rounded-full font-black text-xs flex items-center justify-center border-2 shadow-lg transition-transform ${selectedPart === 1 ? "bg-[#65a30d] text-white border-white scale-125" : "bg-white text-gray-900 border-gray-400"}`}>01</button>
        </div>
        <div className="absolute top-24 right-1/3">
          <button onClick={() => setSelectedPart(2)} className={`w-8 h-8 rounded-full font-black text-xs flex items-center justify-center border-2 shadow-lg transition-transform ${selectedPart === 2 ? "bg-[#65a30d] text-white border-white scale-125" : "bg-white text-gray-900 border-gray-400"}`}>02</button>
        </div>
        <div className="absolute bottom-12 left-1/2">
          <button onClick={() => setSelectedPart(3)} className={`w-8 h-8 rounded-full font-black text-xs flex items-center justify-center border-2 shadow-lg transition-transform ${selectedPart === 3 ? "bg-[#65a30d] text-white border-white scale-125" : "bg-white text-gray-900 border-gray-400"}`}>03</button>
        </div>
      </div>

      {/* Selected Part Card */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-black text-[#65a30d]">PIN {current.pos}</span>
            <h3 className="font-bold text-sm text-gray-900 mt-0.5">{current.name}</h3>
            <p className="text-[10px] font-mono text-gray-400 mt-1">OEM: {current.oem}</p>
          </div>
          <div className="text-right font-black text-base text-gray-900">${current.price.toFixed(2)}</div>
        </div>

        <button onClick={handleAdd} className={`w-full mt-4 py-2.5 rounded-xl font-bold text-xs transition-all ${added ? "bg-green-600 text-white" : "bg-[#65a30d] text-white active:scale-95"}`}>
          {added ? "✓ Added to Order" : "+ Add Blueprint Part to Cart"}
        </button>
      </div>
    </div>
  );
      }

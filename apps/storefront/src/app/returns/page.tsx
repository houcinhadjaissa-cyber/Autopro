"use client";

import React, { useState } from "react";

export default function ReturnsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState("Incorrect Fit (VIN Match Failure)");

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs mb-4">
        <h1 className="text-lg font-bold text-gray-900">Instant Returns</h1>
        <p className="text-xs text-gray-400 mt-0.5">Backed by our 100% Fit Guarantee.</p>
      </div>

      {submitted ? (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-2xs text-center animate-fade-in">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">✓</div>
          <h3 className="font-bold text-sm text-gray-900">Return Authorized Instantly</h3>
          <p className="text-xs text-gray-500 mt-1">Show this authorization code at any ecosystem drop-off partner.</p>
          
          <div className="my-4 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <span className="block text-[10px] text-gray-400 uppercase font-bold">Smart Return Code</span>
            <span className="text-lg font-mono font-black text-[#65a30d] tracking-wider">RET-VIN-9942</span>
          </div>
          
          <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-gray-500 underline">File another return</button>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Select Order Item</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-900 outline-none">
              <option>Order #AP-98421 - Premium Brake Pads</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Reason for Return</label>
            <select value={reason} onChange={e => setReason(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs font-medium text-gray-900 outline-none">
              <option>Incorrect Fit (VIN Match Failure)</option>
              <option>Part Arrived Damaged</option>
              <option>Ordered by Mistake</option>
            </select>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-[10px] text-amber-800 leading-relaxed">
            <strong>Ecosystem Policy:</strong> Because you entered your VIN at checkout, replacement or full credit processing is guaranteed instantly upon receipt scan.
          </div>

          <button onClick={() => setSubmitted(true)} className="w-full bg-[#65a30d] text-white font-bold py-3 rounded-xl text-xs shadow-xs active:scale-95">
            Generate Instant Return Label
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";

export default function HelpPage() {
  const faqs = [
    { q: "How does the 100% Fit Guarantee work?", a: "If you provide your VIN at checkout and the part doesn't fit, we collect it and replace it for free instantly." },
    { q: "Are the parts genuine OEM?", a: "Yes, all parts are sourced directly from official tier-1 ecosystem manufacturers." },
    { q: "How fast is dispatch?", a: "Orders placed before 4 PM are dispatched same-day via high-speed courier networks." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Support & FAQ</h1>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs">
            <h3 className="font-bold text-xs text-gray-900 mb-1">{faq.q}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-100 text-center">
        <p className="text-xs font-bold text-green-800">Need immediate answers?</p>
        <a href="/chat" className="mt-2 inline-block bg-[#65a30d] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-2xs">
          Open Expert Live Chat
        </a>
      </div>
    </div>
  );
}

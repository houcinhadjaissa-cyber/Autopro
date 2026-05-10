"use client";

import React, { useState } from "react";

const BellIcon = () => (
  <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

export default function NotificationsPage() {
  const [alerts, setAlerts] = useState([
    { id: 1, title: "Price Drop Alert", desc: "Synthetic Oil Filter dropped 15% to $12.50. Tap to claim.", time: "10m ago", read: false },
    { id: 2, title: "VIN Verification Complete", desc: "Your BMW 320i matches 1,420 exact-fit ecosystem parts.", time: "2h ago", read: false },
    { id: 3, title: "Mechanic Available", desc: "Precision Auto Works has a new slot open today at 4:00 PM.", time: "1d ago", read: true }
  ]);

  const markAllRead = () => {
    setAlerts(prev => prev.map(a => ({ ...a, read: true })));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-900">Ecosystem Alerts</h1>
        <button onClick={markAllRead} className="text-xs text-[#65a30d] font-bold underline">Mark all read</button>
      </div>

      <div className="space-y-2">
        {alerts.map(a => (
          <div key={a.id} className={`p-3 rounded-xl border transition-all flex items-start space-x-3 ${a.read ? "bg-white border-gray-100" : "bg-green-50/50 border-green-100 shadow-2xs"}`}>
            <BellIcon />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xs text-gray-900">{a.title}</h3>
                <span className="text-[9px] text-gray-400">{a.time}</span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

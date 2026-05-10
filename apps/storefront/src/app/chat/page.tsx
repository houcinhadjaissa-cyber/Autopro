"use client";

import React, { useState } from "react";

const SendIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to Autopro Expert support. Please paste your VIN or describe the part you need.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: "Checking compatibility database... Guaranteed fit available. Would you like me to add it to your cart directly?", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-50 px-4 pt-4 pb-16">
      <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-2xs flex items-center space-x-3 shrink-0">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">AI</div>
        <div>
          <h2 className="text-xs font-bold text-gray-900">Autopro Compatibility AI</h2>
          <p className="text-[10px] text-green-600 font-semibold flex items-center mt-0.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span> Online
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto my-4 space-y-3 pr-1 no-scrollbar">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
              msg.sender === "user" ? "bg-[#65a30d] text-white rounded-br-xs" : "bg-white text-gray-800 border border-gray-200 rounded-bl-xs shadow-2xs"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="bg-white rounded-xl border border-gray-200 p-1.5 flex items-center shadow-sm shrink-0">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your VIN or query..."
          className="flex-1 bg-transparent px-3 text-xs text-gray-900 outline-none"
        />
        <button type="submit" className="w-8 h-8 bg-[#65a30d] rounded-lg flex items-center justify-center active:scale-95 transition-transform">
          <SendIcon />
        </button>
      </form>
    </div>
  );
          }

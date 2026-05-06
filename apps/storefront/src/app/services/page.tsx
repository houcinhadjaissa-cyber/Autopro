"use client";

import { useState } from "react";
import Link from "next/link";

const demoServices = [
  { id: 1, name: "Full Car Service", provider: "AutoCare Garage", price: 8500, currency: "DZD", rating: 4.9, reviews: 156, duration: "3-4 hours", image: "🔧", category: "Maintenance" },
  { id: 2, name: "Brake Inspection & Repair", provider: "BrakeMax Pro", price: 4500, currency: "DZD", rating: 4.8, reviews: 89, duration: "1-2 hours", image: "🛞", category: "Brakes" },
  { id: 3, name: "Oil Change", provider: "QuickLube Center", price: 2500, currency: "DZD", rating: 4.7, reviews: 234, duration: "30 min", image: "🛢️", category: "Maintenance" },
  { id: 4, name: "Engine Diagnostics", provider: "TechAuto Solutions", price: 3000, currency: "DZD", rating: 4.9, reviews: 67, duration: "1 hour", image: "🔍", category: "Diagnostics" },
  { id: 5, name: "AC Repair & Recharge", provider: "CoolAir Auto", price: 6000, currency: "DZD", rating: 4.6, reviews: 45, duration: "2 hours", image: "❄️", category: "Electrical" },
  { id: 6, name: "Tire Change & Balancing", provider: "TireZone", price: 3500, currency: "DZD", rating: 4.8, reviews: 178, duration: "45 min", image: "⚫", category: "Tires" },
];

const categories = ["All Services", "Maintenance", "Brakes", "Diagnostics", "Electrical", "Tires", "Body Work"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredServices = selectedCategory === "All Services" 
    ? demoServices 
    : demoServices.filter(s => s.category === selectedCategory);

  return (
    <main className="min-h-screen bg-canvas">
      {/* Page Header */}
      <div className="bg-surface-1 border-b border-surface-2 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Book a Service
          </h1>
          
          {/* Location & Vehicle Bar */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <span className="absolute left-3 top-2.5 text-gray-500">📍</span>
              <input
                type="text"
                placeholder="Enter your location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-canvas border border-surface-2 rounded-lg py-2 px-4 pl-10 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
              />
            </div>
            <select className="bg-canvas border border-surface-2 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none">
              <option>Select Your Vehicle</option>
              <option>+ Add New Vehicle</option>
            </select>
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Find Services
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-surface-1 text-gray-400 hover:text-white border border-surface-2"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-400 mb-4">
          Showing <span className="text-white font-medium">{filteredServices.length}</span> services
        </p>

        {/* Services List */}
        <div className="space-y-4">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={`/service/${service.id}`}
              className="block bg-surface-1 rounded-lg border border-surface-2 p-4 hover:border-primary/50 transition-all"
            >
              <div className="flex gap-4">
                {/* Service Icon */}
                <div className="bg-canvas rounded-lg w-20 h-20 flex items-center justify-center text-4xl flex-shrink-0">
                  {service.image}
                </div>
                
                {/* Service Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {service.provider}
                      </p>
                    </div>
                    <span className="text-xl font-bold text-primary whitespace-nowrap">
                      {service.price.toLocaleString()} <span className="text-sm">{service.currency}</span>
                    </span>
                  </div>
                  
                  {/* Details Row */}
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-gray-500 text-sm">({service.reviews})</span>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <span>🕐</span>
                      <span>{service.duration}</span>
                    </div>
                    
                    {/* Category Badge */}
                    <span className="bg-canvas px-2 py-1 rounded text-xs text-gray-400">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Book Button - Mobile */}
              <button className="w-full mt-4 bg-primary/20 hover:bg-primary text-primary hover:text-white py-2 rounded-lg font-medium transition-colors md:hidden">
                Book Now
              </button>
            </Link>
          ))}
        </div>

        {/* Emergency Services Banner */}
        <div className="mt-8 bg-gradient-to-r from-red-900/50 to-surface-1 rounded-lg border border-red-500/30 p-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🚨</span>
            <div>
              <h3 className="text-xl font-bold text-white">Need Emergency Help?</h3>
              <p className="text-gray-400">24/7 roadside assistance and emergency repairs available</p>
            </div>
            <button className="ml-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors hidden md:block">
              Get Help Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
              }

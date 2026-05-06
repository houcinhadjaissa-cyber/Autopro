"use client";

import { useState } from "react";
import Link from "next/link";

const demoVehicles = [
  { 
    id: 1, 
    make: "Toyota", 
    model: "Corolla", 
    year: 2019, 
    plate: "12345-100-16", 
    vin: "JTDKN3DU5A0123456",
    mileage: 45000,
    lastService: "2026-03-15",
    image: "🚗"
  },
  { 
    id: 2, 
    make: "Peugeot", 
    model: "308", 
    year: 2021, 
    plate: "67890-200-16",
    vin: "VF3LBHZTXJS234567",
    mileage: 28000,
    lastService: "2026-04-20",
    image: "🚙"
  },
];

const serviceHistory = [
  { id: 1, vehicleId: 1, service: "Oil Change", date: "2026-03-15", provider: "QuickLube Center", cost: 2500 },
  { id: 2, vehicleId: 1, service: "Brake Inspection", date: "2026-02-10", provider: "BrakeMax Pro", cost: 1500 },
  { id: 3, vehicleId: 2, service: "Full Service", date: "2026-04-20", provider: "AutoCare Garage", cost: 8500 },
];

export default function GaragePage() {
  const [selectedVehicle, setSelectedVehicle] = useState(demoVehicles[0]);
  const [activeTab, setActiveTab] = useState("overview");

  const vehicleHistory = serviceHistory.filter(s => s.vehicleId === selectedVehicle.id);

  return (
    <main className="min-h-screen bg-canvas">
      {/* Page Header */}
      <div className="bg-surface-1 border-b border-surface-2 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              My Garage
            </h1>
            <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <span>+</span>
              <span>Add Vehicle</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Vehicle Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {demoVehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => setSelectedVehicle(vehicle)}
              className={`text-left bg-surface-1 rounded-lg border p-4 transition-all ${
                selectedVehicle.id === vehicle.id
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-surface-2 hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{vehicle.image}</div>
                <div>
                  <h3 className="font-semibold text-white">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-gray-400 text-sm">{vehicle.plate}</p>
                </div>
              </div>
            </button>
          ))}
          
          {/* Add Vehicle Card */}
          <button className="bg-surface-1 rounded-lg border border-dashed border-surface-2 p-4 hover:border-primary/50 transition-all flex items-center justify-center min-h-[100px]">
            <div className="text-center">
              <span className="text-3xl text-gray-500">+</span>
              <p className="text-gray-400 text-sm mt-1">Add Another Vehicle</p>
            </div>
          </button>
        </div>

        {/* Selected Vehicle Details */}
        <div className="bg-surface-1 rounded-xl border border-surface-2 overflow-hidden">
          {/* Vehicle Header */}
          <div className="bg-gradient-to-r from-primary-900 to-surface-1 p-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{selectedVehicle.image}</div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
                </h2>
                <p className="text-gray-300">{selectedVehicle.plate}</p>
                <p className="text-gray-400 text-sm mt-1">VIN: {selectedVehicle.vin}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-surface-2">
            {["overview", "history", "parts", "documents"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Mileage Card */}
                <div className="bg-canvas rounded-lg p-4 border border-surface-2">
                  <p className="text-gray-400 text-sm mb-1">Current Mileage</p>
                  <p className="text-2xl font-bold text-white">
                    {selectedVehicle.mileage.toLocaleString()} km
                  </p>
                  <button className="text-primary text-sm mt-2 hover:underline">
                    Update Mileage
                  </button>
                </div>

                {/* Last Service Card */}
                <div className="bg-canvas rounded-lg p-4 border border-surface-2">
                  <p className="text-gray-400 text-sm mb-1">Last Service</p>
                  <p className="text-2xl font-bold text-white">
                    {selectedVehicle.lastService}
                  </p>
                  <Link href="/services" className="text-primary text-sm mt-2 hover:underline block">
                    Book Next Service
                  </Link>
                </div>

                {/* Status Card */}
                <div className="bg-canvas rounded-lg p-4 border border-surface-2">
                  <p className="text-gray-400 text-sm mb-1">Vehicle Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-xl font-bold text-green-500">Good</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">No issues detected</p>
                </div>

                {/* Quick Actions */}
                <div className="md:col-span-3 mt-4">
                  <h3 className="font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Link href="/search" className="bg-canvas hover:bg-surface-2 rounded-lg p-4 text-center transition-colors border border-surface-2">
                      <span className="text-2xl block mb-2">🔧</span>
                      <span className="text-gray-300 text-sm">Find Parts</span>
                    </Link>
                    <Link href="/services" className="bg-canvas hover:bg-surface-2 rounded-lg p-4 text-center transition-colors border border-surface-2">
                      <span className="text-2xl block mb-2">🛠️</span>
                      <span className="text-gray-300 text-sm">Book Service</span>
                    </Link>
                    <button className="bg-canvas hover:bg-surface-2 rounded-lg p-4 text-center transition-colors border border-surface-2">
                      <span className="text-2xl block mb-2">📄</span>
                      <span className="text-gray-300 text-sm">Documents</span>
                    </button>
                    <button className="bg-canvas hover:bg-surface-2 rounded-lg p-4 text-center transition-colors border border-surface-2">
                      <span className="text-2xl block mb-2">📊</span>
                      <span className="text-gray-300 text-sm">Full Report</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div>
                <h3 className="font-semibold text-white mb-4">Service History</h3>
                {vehicleHistory.length > 0 ? (
                  <div className="space-y-3">
                    {vehicleHistory.map((record) => (
                      <div key={record.id} className="bg-canvas rounded-lg p-4 border border-surface-2 flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">{record.service}</p>
                          <p className="text-gray-400 text-sm">{record.provider}</p>
                          <p className="text-gray-500 text-sm">{record.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{record.cost.toLocaleString()} DZD</p>
                          <button className="text-gray-400 text-sm hover:text-white">View Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No service history yet.</p>
                )}
              </div>
            )}

            {activeTab === "parts" && (
              <div>
                <h3 className="font-semibold text-white mb-4">Parts Replaced</h3>
                <p className="text-gray-400">Parts history will appear here after services are completed.</p>
                <Link href="/search" className="inline-block mt-4 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors">
                  Find Compatible Parts
                </Link>
              </div>
            )}

            {activeTab === "documents" && (
              <div>
                <h3 className="font-semibold text-white mb-4">Vehicle Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-canvas rounded-lg p-4 border border-surface-2">
                    <p className="text-gray-400 text-sm">Registration</p>
                    <p className="text-white">No document uploaded</p>
                    <button className="text-primary text-sm mt-2 hover:underline">Upload</button>
                  </div>
                  <div className="bg-canvas rounded-lg p-4 border border-surface-2">
                    <p className="text-gray-400 text-sm">Insurance</p>
                    <p className="text-white">No document uploaded</p>
                    <button className="text-primary text-sm mt-2 hover:underline">Upload</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
      }

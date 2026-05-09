/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useGarageStore, type Vehicle } from "@/stores/garageStore";
import { getCarImageUrl } from "@/lib/carImages";
import CarFallback from "@/components/CarFallback";
import {
  Car,
  Plus,
  Trash2,
  Search,
  Star,
  Wrench,
  ChevronDown,
  ChevronUp,
  Gauge,
  Fuel,
  Cog,
  Palette,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function GaragePage() {
  const { vehicles, vehicleCount, removeVehicle, updateVehicle } = useGarageStore();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-canvas p-4 pb-24">
      {/* ─── Header ─── */}
      <div className="bg-gradient-to-b from-primary-900 to-canvas p-6 rounded-2xl mb-6 text-white shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              My Garage
            </h1>
            <p className="text-xs text-gray-300 mt-1">
              {vehicleCount()} vehicle{vehicleCount() !== 1 ? "s" : ""} saved
            </p>
          </div>

          <button className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary-dark transition-colors shadow-md">
            <Plus className="w-4 h-4" />
            Add Car
          </button>
        </div>
      </div>

      {/* ─── Vehicle List ─── */}
      <div>
        {vehicleCount() === 0 ? (
          /* Empty State */
          <div className="bg-surface-1 rounded-2xl border border-dashed border-surface-2 p-8 text-center">
            <Car className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h2 className="text-base font-semibold mb-1">Your garage is empty</h2>
            <p className="text-xs text-gray-500 mb-4 max-w-xs mx-auto">
              Add your vehicle to start finding compatible parts instantly.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary-dark transition-colors">
              <Plus className="w-4 h-4" />
              Add Your First Car
            </button>
          </div>
        ) : (
          /* Vehicle Cards */
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                isExpanded={expandedId === vehicle.id}
                onToggle={() => toggleExpand(vehicle.id)}
                onDelete={() => removeVehicle(vehicle.id)}
                onSetPrimary={() => updateVehicle(vehicle.id, { marketRegion: "DZ" })}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function VehicleCard({
  vehicle,
  isExpanded,
  onToggle,
  onDelete,
}: {
  vehicle: Vehicle;
  isExpanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onSetPrimary: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const catalogUrl = getCarImageUrl(vehicle.make, vehicle.model, vehicle.year);
  const imageUrl = vehicle.imageUrl || catalogUrl;

  return (
    <div className="bg-surface-1 rounded-2xl border border-surface-2 overflow-hidden shadow-sm hover:border-primary/30 transition-colors">
      {/* ─── Image Area (7zap-style) ─── */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-40 flex items-center justify-center overflow-hidden border-b border-surface-2">
        {!imgError ? (
          <img
            src={imageUrl}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-contain p-2"
            onError={() => setImgError(true)}
          />
        ) : (
          <CarFallback make={vehicle.make} className="w-full h-full" />
        )}

        {/* Primary Badge */}
        {vehicle.id === useGarageStore.getState().vehicles[0]?.id && (
          <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star className="w-2.5 h-2.5 fill-current" />
            Primary
          </div>
        )}

        {/* VIN Badge */}
        {vehicle.vin && (
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-[10px] font-mono text-gray-600 px-2 py-0.5 rounded border border-gray-200">
            {vehicle.vin.slice(0, 8)}...
          </div>
        )}
      </div>

      {/* ─── Vehicle Info ─── */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-base font-bold text-gray-900">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-xs text-gray-500">{vehicle.year}</p>
          </div>

          <button onClick={onToggle} className="text-gray-400 hover:text-primary p-1">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Specs Row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {vehicle.engine && (
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Cog className="w-2.5 h-2.5" />
              {vehicle.engine}
            </span>
          )}
          {vehicle.fuelType && (
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Fuel className="w-2.5 h-2.5" />
              {vehicle.fuelType}
            </span>
          )}
          {vehicle.transmission && (
            <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Gauge className="w-2.5 h-2.5" />
              {vehicle.transmission}
            </span>
          )}
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="border-t border-surface-2 pt-3 mb-3 space-y-1.5 text-xs">
            {vehicle.vin && (
              <div className="flex justify-between">
                <span className="text-gray-500">VIN</span>
                <span className="font-mono text-gray-700">{vehicle.vin}</span>
              </div>
            )}
            {vehicle.color && (
              <div className="flex justify-between">
                <span className="text-gray-500 flex items-center gap-1">
                  <Palette className="w-3 h-3" /> Color
                </span>
                <span className="text-gray-700">{vehicle.color}</span>
              </div>
            )}
            {vehicle.lastServiceDate && (
              <div className="flex justify-between">
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Last Service
                </span>
                <span className="text-gray-700">{vehicle.lastServiceDate}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 mt-2">
          <Link
            href={`/search?vehicle=${vehicle.id}`}
            className="flex-1 flex items-center justify-center gap-1 py-2 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary-dark transition-colors shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            Find Parts
          </Link>

          <button
            onClick={onToggle}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Specs</span>
          </button>

          <button
            onClick={onDelete}
            className="flex items-center justify-center px-2.5 py-2 bg-red-50 text-red-500 rounded-lg text-xs hover:bg-red-100 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

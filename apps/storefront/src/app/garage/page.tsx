"use client";

import { useState } from "react";
import { useGarageStore, Vehicle } from "@/stores/garageStore";
import { getCarImageUrl } from "@/lib/carImages";
import CarFallback from "@/components/CarFallback";
import {
  Car,
  Plus,
  Trash2,
  Search,
  Star,
  StarOff,
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
  const { vehicles, vehicleCount, removeVehicle, updateVehicle } =
    useGarageStore();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-canvas">
      {/* ─── Header ─── */}
      <div className="bg-gradient-to-b from-primary-900 to-canvas py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Car className="w-8 h-8 text-primary" />
                My Garage
              </h1>
              <p className="text-gray-400 mt-1">
                {vehicleCount()} vehicle{vehicleCount() !== 1 ? "s" : ""} saved
              </p>
            </div>

            <button className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-md">
              <Plus className="w-5 h-5" />
              Add Vehicle
            </button>
          </div>
        </div>
      </div>

      {/* ─── Vehicle List ─── */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {vehicleCount() === 0 ? (
          /* Empty State */
          <div className="bg-surface-1 rounded-2xl border border-dashed border-surface-2 p-12 text-center">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your garage is empty</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Add your first vehicle to start finding compatible parts, booking
              services, and tracking maintenance history.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
              <Plus className="w-5 h-5" />
              Add Your First Car
            </button>
          </div>
        ) : (
          /* Vehicle Cards */
          <div className="grid md:grid-cols-2 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                isExpanded={expandedId === vehicle.id}
                onToggle={() => toggleExpand(vehicle.id)}
                onDelete={() => removeVehicle(vehicle.id)}
                onSetPrimary={() =>
                  updateVehicle(vehicle.id, { marketRegion: "DZ" })
                }
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

/* ════════════════════════════════════════════════════════════════ */
/* 🚗 VEHICLE CARD — 7zap-style layout with catalog image          */
/* ════════════════════════════════════════════════════════════════ */
function VehicleCard({
  vehicle,
  isExpanded,
  onToggle,
  onDelete,
  onSetPrimary,
}: {
  vehicle: Vehicle;
  isExpanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onSetPrimary: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  // Image source priority:
  // 1. User-uploaded photo (vehicle.imageUrl)
  // 2. Car Imagin API (auto-fetch by make/model/year)
  // 3. CSS fallback (car silhouette SVG)
  const catalogUrl = getCarImageUrl(vehicle.make, vehicle.model, vehicle.year);
  const imageUrl = vehicle.imageUrl || catalogUrl;

  return (
    <div className="bg-surface-1 rounded-2xl border border-surface-2 overflow-hidden hover:border-primary/30 transition-colors">
      {/* ─── Image Area (7zap-style) ─── */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-48 flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={imageUrl}
            alt={`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
            className="w-full h-full object-contain p-4"
            onError={() => setImgError(true)}
          />
        ) : (
          /* CSS Fallback — SVG car silhouette */
          <CarFallback make={vehicle.make} className="w-full h-full" />
        )}

        {/* Primary Badge */}
        {vehicle.id === useGarageStore.getState().vehicles[0]?.id && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Primary
          </div>
        )}

        {/* VIN Badge */}
        {vehicle.vin && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-mono text-gray-600 px-2 py-1 rounded">
            {vehicle.vin.slice(0, 8)}...
          </div>
        )}
      </div>

      {/* ─── Vehicle Info ─── */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-sm text-gray-500">{vehicle.year}</p>
          </div>

          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-primary transition-colors p-1"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* ─── Quick Specs Row ─── */}
        <div className="flex flex-wrap gap-2 mb-4">
          {vehicle.engine && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
              <Cog className="w-3 h-3" />
              {vehicle.engine}
            </span>
          )}
          {vehicle.fuelType && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
              <Fuel className="w-3 h-3" />
              {vehicle.fuelType}
            </span>
          )}
          {vehicle.transmission && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
              <Gauge className="w-3 h-3" />
              {vehicle.transmission}
            </span>
          )}
          {vehicle.mileage && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full flex items-center gap-1">
              <Gauge className="w-3 h-3" />
              {vehicle.mileage.toLocaleString()} km
            </span>
          )}
        </div>

        {/* ─── Expanded Details ─── */}
        {isExpanded && (
          <div className="border-t border-surface-2 pt-4 mb-4 space-y-2">
            {vehicle.vin && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">VIN</span>
                <span className="font-mono">{vehicle.vin}</span>
              </div>
            )}
            {vehicle.color && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <Palette className="w-3 h-3" />
                  Color
                </span>
                <span>{vehicle.color}</span>
              </div>
            )}
            {vehicle.bodyStyle && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Body</span>
                <span>{vehicle.bodyStyle}</span>
              </div>
            )}
            {vehicle.driveType && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Drive</span>
                <span>{vehicle.driveType}</span>
              </div>
            )}
            {vehicle.lastServiceDate && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Last Service
                </span>
                <span>{vehicle.lastServiceDate}</span>
              </div>
            )}
            {vehicle.autoproVehicleId && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Autopro ID</span>
                <span className="font-mono text-xs text-primary">
                  {vehicle.autoproVehicleId}
                </span>
              </div>
            )}
          </div>
        )}

        {/* ─── Action Buttons ─── */}
        <div className="flex gap-2">
          <Link
            href={`/search?vehicle=${vehicle.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            <Search className="w-4 h-4" />
            Find Parts
          </Link>

          <button
            onClick={onToggle}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <Wrench className="w-4 h-4" />
            <span className="hidden sm:inline">History</span>
          </button>

          <button
            onClick={onDelete}
            className="flex items-center justify-center px-3 py-2.5 bg-red-50 text-red-500 rounded-lg text-sm hover:bg-red-100 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
        }

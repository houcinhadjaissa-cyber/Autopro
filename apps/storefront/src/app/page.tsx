/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useGarageStore } from "@/stores/garageStore";
import { getCarImageUrl } from "@/lib/carImages";
import CarFallback from "@/components/CarFallback";
import {
  Car,
  Search,
  ChevronRight,
  Plus,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { vehicles, vehicleCount } = useGarageStore();
  const hasVehicles = vehicleCount() > 0;
  const primaryVehicle = hasVehicles ? vehicles[0] : null;
  const extraCount = vehicleCount() - 1;

  return (
    <main className="min-h-screen bg-canvas p-4 pb-24 space-y-6">
      
      {/* ─── Hero Section ─── */}
      <div className="bg-gradient-to-b from-primary-900 to-primary p-6 rounded-2xl text-center text-white shadow-md">
        <h1 className="text-3xl font-bold mb-2 tracking-tight">
          Autopro
        </h1>
        <p className="text-xs text-primary-100 mb-6 max-w-xs mx-auto">
          Your mobile automotive ecosystem — Parts, Services & History
        </p>

        {/* Search Bar */}
        <Link href="/search" className="block bg-white rounded-xl p-3 text-left shadow-inner border border-gray-100">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Search className="w-4 h-4 text-primary" />
            <span>Search parts, services...</span>
          </div>
        </Link>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* 🚗 QUICK WIN #5: "Find Parts for My Car" CTA */}
      {/* ═══════════════════════════════════════════ */}
      <section className="bg-surface-1 rounded-2xl border border-gray-100 p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Car className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-900">Find Parts for Your Car</h2>
            <p className="text-[10px] text-gray-500">Instant matching via compatibility engine</p>
          </div>
        </div>

        {/* Vehicle Card or Empty State */}
        {hasVehicles && primaryVehicle ? (
          <div className="bg-canvas rounded-xl p-3 mb-4 border border-surface-2 flex items-center gap-3">
            <HomepageCarImage vehicle={primaryVehicle} />

            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 truncate">
                {primaryVehicle.make} {primaryVehicle.model}
              </p>
              <p className="text-[10px] text-gray-500 font-mono truncate">
                {primaryVehicle.year} • {primaryVehicle.fuelType || "Gas"}
              </p>
            </div>

            {extraCount > 0 && (
              <Link href="/garage" className="text-[10px] text-primary font-bold flex items-center gap-0.5 flex-shrink-0">
                +{extraCount} more
                <ChevronRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        ) : (
          <div className="bg-canvas rounded-xl p-4 mb-4 border border-dashed border-surface-2 text-center">
            <p className="text-xs text-gray-500 mb-2">No vehicles saved yet</p>
            <Link
              href="/garage"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold"
            >
              <Plus className="w-3 h-3" /> Add Your Car
            </Link>
          </div>
        )}

        {/* CTA Button */}
        <Link
          href={hasVehicles && primaryVehicle ? `/search?vehicle=${primaryVehicle.id}` : "/garage"}
          className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-bold text-xs shadow-md hover:bg-primary-dark transition-colors"
        >
          <Search className="w-4 h-4" />
          {hasVehicles && primaryVehicle ? `Browse Parts for ${primaryVehicle.make}` : "Add Car & Start Shopping"}
        </Link>

        {/* Trust Badges */}
        <div className="flex justify-center gap-3 mt-3 text-[10px] text-gray-400 border-t border-gray-50 pt-3">
          <span className="flex items-center gap-0.5"><Shield className="w-3 h-3 text-primary" /> VIN-verified</span>
          <span className="flex items-center gap-0.5"><Zap className="w-3 h-3 text-primary" /> Instant</span>
          <span className="flex items-center gap-0.5"><CheckCircle className="w-3 h-3 text-primary" /> 100% Fit</span>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">Ecosystem Services</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface-1 p-3 rounded-xl border border-gray-100">
            <span className="text-lg block mb-1">🔧</span>
            <h4 className="text-xs font-bold text-gray-900">Parts Match</h4>
            <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Exact fit auto parts</p>
          </div>
          <div className="bg-surface-1 p-3 rounded-xl border border-gray-100">
            <span className="text-lg block mb-1">🛠️</span>
            <h4 className="text-xs font-bold text-gray-900">Mechanics</h4>
            <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Book local garages</p>
          </div>
        </div>
      </div>

    </main>
  );
}

function HomepageCarImage({
  vehicle,
}: {
  vehicle: { make: string; model: string; year: number; imageUrl?: string };
}) {
  const [imgError, setImgError] = useState(false);
  const catalogUrl = getCarImageUrl(vehicle.make, vehicle.model, vehicle.year);
  const imageUrl = vehicle.imageUrl || catalogUrl;

  if (imgError) {
    return (
      <div className="w-16 h-12 rounded-lg bg-gray-50 border border-surface-2 flex items-center justify-center flex-shrink-0 p-1">
        <CarFallback make={vehicle.make} className="w-full h-full" />
      </div>
    );
  }

  return (
    <div className="w-16 h-12 rounded-lg bg-gray-50 border border-surface-2 flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
      <img
        src={imageUrl}
        alt={`${vehicle.make}`}
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
        }

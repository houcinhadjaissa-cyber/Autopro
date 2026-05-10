/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useGarageStore } from "@/stores/garageStore";
import {
  Car,
  Search,
  ChevronRight,
  Plus,
  Shield,
  Zap,
  CheckCircle,
  Lock,
  ShieldCheck,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { vehicles, vehicleCount } = useGarageStore();
  const hasVehicles = vehicleCount() > 0;
  const primaryVehicle = hasVehicles ? vehicles[0] : null;
  const extraCount = vehicleCount() - 1;

  return (
    <main className="min-h-screen bg-canvas p-4 pb-24 space-y-6 max-w-md mx-auto">
      
      {/* ─── Hero Mobile Section (Matches Arena Look) ─── */}
      <div className="bg-gradient-to-b from-primary-900 to-primary p-6 rounded-2xl text-center text-white shadow-md">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
          <Car className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-1 tracking-tight">
          Autopro Ecosystem
        </h1>
        <p className="text-xs text-primary-100 mb-5 max-w-xs mx-auto">
          Parts Marketplace • Service Booking • Garage
        </p>

        {/* Live Search Bar Placeholder */}
        <Link href="/search" className="block bg-white rounded-xl p-3 text-left shadow-inner border border-gray-100">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
            <Search className="w-4 h-4 text-primary" />
            <span>Search parts, services...</span>
          </div>
        </Link>
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 🔒 QUICK WIN #6: TRUST BADGE BAR (Ecosystem Confidence)  */}
      {/* ════════════════════════════════════════════════════════ */}
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 shadow-sm">
        <div className="flex items-center justify-between gap-1 text-center">
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-primary font-bold text-[10px]">
              <Lock className="w-3 h-3 stroke-[2.5]" />
              <span>256-BIT</span>
            </div>
            <span className="text-[9px] text-gray-500 block mt-0.5">Secure Pay</span>
          </div>

          <span className="text-gray-200 text-xs">|</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-primary font-bold text-[10px]">
              <ShieldCheck className="w-3 h-3 stroke-[2.5]" />
              <span>100% FIT</span>
            </div>
            <span className="text-[9px] text-gray-500 block mt-0.5">VIN Verified</span>
          </div>

          <span className="text-gray-200 text-xs">|</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-primary font-bold text-[10px]">
              <Zap className="w-3 h-3 stroke-[2.5]" />
              <span>INSTANT</span>
            </div>
            <span className="text-[9px] text-gray-500 block mt-0.5">Fast Dispatch</span>
          </div>

          <span className="text-gray-200 text-xs">|</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-primary font-bold text-[10px]">
              <Award className="w-3 h-3 stroke-[2.5]" />
              <span>GENUINE</span>
            </div>
            <span className="text-[9px] text-gray-500 block mt-0.5">Official Parts</span>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 🚗 QUICK WIN #5: "FIND PARTS FOR MY CAR" CTA (7zap Image)*/}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="bg-surface-1 rounded-2xl border border-gray-100 p-5 shadow-sm">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Car className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-900">Find Parts for Your Car</h2>
            <p className="text-[10px] text-gray-500">Exact match via compatibility engine</p>
          </div>
        </div>

        {/* Dynamic Vehicle Card (7zap Image placement) */}
        {hasVehicles && primaryVehicle ? (
          <div className="bg-canvas rounded-xl p-3 mb-4 border border-surface-2 flex items-center gap-3 shadow-inner">
            
            {/* 7zap Real Image Area */}
            <div className="w-16 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
              <img
                src={
                  primaryVehicle.imageUrl ||
                  `https://www.carimagery.org/api.asmx/GetImageUrl?search=${encodeURIComponent(
                    `${primaryVehicle.make} ${primaryVehicle.model}`
                  )}`
                }
                alt={primaryVehicle.make}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Bulletproof fallback if API fails
                  e.currentTarget.src = "https://placehold.co/100x60/eeeeee/6FB81A?text=Car";
                }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 truncate">
                {primaryVehicle.make} {primaryVehicle.model}
              </p>
              <p className="text-[10px] text-gray-500 font-mono truncate mt-0.5">
                {primaryVehicle.year} • {primaryVehicle.fuelType || "Gasoline"}
              </p>
            </div>

            {extraCount > 0 && (
              <Link href="/garage" className="text-[10px] text-primary font-bold flex items-center gap-0.5 flex-shrink-0 bg-primary/5 px-2 py-1 rounded-md">
                +{extraCount} more
                <ChevronRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        ) : (
          <div className="bg-canvas rounded-xl p-4 mb-4 border border-dashed border-surface-2 text-center">
            <p className="text-xs text-gray-500 mb-2 font-medium">No vehicles saved yet</p>
            <Link
              href="/garage"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold transition-transform active:scale-95"
            >
              <Plus className="w-3 h-3" /> Add Your First Car
            </Link>
          </div>
        )}

        {/* CTA Search Link */}
        <Link
          href={hasVehicles && primaryVehicle ? `/search?vehicle=${primaryVehicle.id}` : "/garage"}
          className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-bold text-xs shadow-md hover:bg-primary-dark transition-all active:scale-[0.99]"
        >
          <Search className="w-4 h-4" />
          {hasVehicles && primaryVehicle ? `Browse Parts for ${primaryVehicle.make}` : "Add Car & Start Shopping"}
        </Link>

        {/* Guarantee microcopy */}
        <div className="flex justify-center gap-4 mt-3 text-[10px] text-gray-400 border-t border-gray-50 pt-3 font-medium">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-primary" /> VIN Verified</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> 100% Fit</span>
        </div>
      </section>

      {/* ─── Ecosystem Pillars Grid ─── */}
      <div className="space-y-2.5">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">Universal Services</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link href="/search" className="bg-surface-1 p-3.5 rounded-xl border border-gray-100 block active:border-primary">
            <span className="text-xl block mb-1.5">🔧</span>
            <h4 className="text-xs font-bold text-gray-900">Auto Parts</h4>
            <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Universal marketplace</p>
          </Link>
          <Link href="/services" className="bg-surface-1 p-3.5 rounded-xl border border-gray-100 block active:border-primary">
            <span className="text-xl block mb-1.5">🛠️</span>
            <h4 className="text-xs font-bold text-gray-900">Mechanics</h4>
            <p className="text-[10px] text-gray-500 leading-tight mt-0.5">Book local garages</p>
          </Link>
        </div>
      </div>

    </main>
  );
          }

"use client";

import Link from "next/link";
import { useGarageStore } from "@/stores/garageStore";

export default function Home() {
  const { vehicles, vehicleCount } = useGarageStore();
  const hasVehicles = vehicleCount() > 0;
  const primaryVehicle = hasVehicles ? vehicles[0] : null;
  const extraCount = vehicleCount() - 1;

  return (
    <main className="p-4 space-y-5">
      
      {/* ─── Hero Mobile Section ─── */}
      <div className="bg-gradient-to-b from-gray-900 to-[#0B0E11] p-5 rounded-2xl text-center text-white shadow-md">
        <div className="w-10 h-10 bg-[#6FB81A]/20 rounded-xl flex items-center justify-center mx-auto mb-2 border border-[#6FB81A]/30">
          <svg className="w-6 h-6 text-[#6FB81A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
        </div>
        <h1 className="text-xl font-bold tracking-tight">Autopro Ecosystem</h1>
        <p className="text-[11px] text-gray-400 mb-4 mt-0.5">Parts Marketplace • Service Booking • Garage</p>

        {/* Live Search Bar Placeholder */}
        <Link href="/search" className="block bg-white rounded-xl p-2.5 text-left shadow-inner">
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
            <svg className="w-4 h-4 text-[#6FB81A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span>Search parts, services...</span>
          </div>
        </Link>
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 🔒 QUICK WIN #6: TRUST BADGE BAR (Pure Native SVGs)      */}
      {/* ════════════════════════════════════════════════════════ */}
      <div className="bg-[#6FB81A]/5 border border-[#6FB81A]/10 rounded-xl p-2.5 shadow-sm">
        <div className="flex items-center justify-between text-center px-1">
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-[#6FB81A] font-bold text-[9px]">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span>256-BIT</span>
            </div>
            <span className="text-[8px] text-gray-500 block font-medium mt-0.5">Secure Pay</span>
          </div>

          <span className="text-gray-200 text-xs">|</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-[#6FB81A] font-bold text-[9px]">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span>100% FIT</span>
            </div>
            <span className="text-[8px] text-gray-500 block font-medium mt-0.5">VIN Verified</span>
          </div>

          <span className="text-gray-200 text-xs">|</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-[#6FB81A] font-bold text-[9px]">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span>INSTANT</span>
            </div>
            <span className="text-[8px] text-gray-500 block font-medium mt-0.5">Fast Dispatch</span>
          </div>

          <span className="text-gray-200 text-xs">|</span>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5 text-[#6FB81A] font-bold text-[9px]">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              <span>GENUINE</span>
            </div>
            <span className="text-[8px] text-gray-500 block font-medium mt-0.5">Official Parts</span>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/* 🚗 QUICK WIN #5: "FIND PARTS FOR MY CAR" CTA (7zap Image)*/}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-[#6FB81A]/10 flex items-center justify-center text-[#6FB81A]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900">Find Parts for Your Car</h2>
            <p className="text-[9px] text-gray-500">Exact match via compatibility engine</p>
          </div>
        </div>

        {/* Dynamic Vehicle Card with Safe 7zap Image loading */}
        {hasVehicles && primaryVehicle ? (
          <div className="bg-white rounded-xl p-2.5 mb-3 border border-gray-200 flex items-center gap-2.5 shadow-sm">
            
            {/* Real 7zap Image Area */}
            <div className="w-16 h-11 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 p-0.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  primaryVehicle.imageUrl || 
                  `https://www.carimagery.org/api.asmx/GetImageUrl?search=${encodeURIComponent(`${primaryVehicle.make} ${primaryVehicle.model}`)}`
                }
                alt={primaryVehicle.make}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/100x60/eeeeee/6FB81A?text=Car";
                }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 truncate">
                {primaryVehicle.make} {primaryVehicle.model}
              </p>
              <p className="text-[9px] text-gray-500 font-mono truncate mt-0.5">
                {primaryVehicle.year} • {primaryVehicle.fuelType || "Gasoline"}
              </p>
            </div>

            {extraCount > 0 && (
              <Link href="/garage" className="text-[9px] text-[#6FB81A] font-bold flex items-center bg-[#6FB81A]/10 px-1.5 py-0.5 rounded">
                +{extraCount}
              </Link>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-3 mb-3 border border-dashed border-gray-200 text-center">
            <p className="text-[10px] text-gray-500 mb-2 font-medium">No vehicles saved yet</p>
            <Link
              href="/garage"
              className="inline-flex items-center gap-1 px-3 py-1 bg-[#6FB81A]/10 text-[#6FB81A] rounded-lg text-[10px] font-bold"
            >
              <span>+ Add Your First Car</span>
            </Link>
          </div>
        )}

        {/* CTA Search Link */}
        <Link
          href={hasVehicles && primaryVehicle ? `/search?vehicle=${primaryVehicle.id}` : "/garage"}
          className="w-full flex items-center justify-center gap-1 py-2.5 bg-[#6FB81A] text-white rounded-xl font-bold text-xs shadow-md active:bg-[#5A9415]"
        >
          <span>{hasVehicles && primaryVehicle ? `Browse Parts for ${primaryVehicle.make}` : "Add Car & Start Shopping"}</span>
        </Link>
      </section>

      {/* ─── Universal Services Grid ─── */}
      <div className="space-y-2">
        <h3 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider px-1">Ecosystem Pillars</h3>
        <div className="grid grid-cols-2 gap-2.5">
          <Link href="/search" className="bg-gray-50 p-3 rounded-xl border border-gray-200 block">
            <span className="text-base block mb-1">🔧</span>
            <h4 className="text-xs font-bold text-gray-900">Auto Parts</h4>
            <p className="text-[9px] text-gray-500 mt-0.5">Universal database</p>
          </Link>
          <Link href="/services" className="bg-gray-50 p-3 rounded-xl border border-gray-200 block">
            <span className="text-base block mb-1">🛠️</span>
            <h4 className="text-xs font-bold text-gray-900">Mechanics</h4>
            <p className="text-[9px] text-gray-500 mt-0.5">Book local garages</p>
          </Link>
        </div>
      </div>

    </main>
  );
                                                                                                                                                                                                            }

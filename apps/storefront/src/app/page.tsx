"use client";

import { useGarageStore } from "@/stores/garageStore";
import { Car, Search, ChevronRight, Plus, Shield, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { vehicles, vehicleCount } = useGarageStore();
  const hasVehicles = vehicleCount() > 0;
  const primaryVehicle = hasVehicles ? vehicles[0] : null;
  const extraCount = vehicleCount() - 1;

  return (
    <main className="min-h-screen bg-canvas">
      {/* ─── Hero Section ─── */}
      <div className="bg-gradient-to-b from-primary-900 to-canvas py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Welcome to <span className="text-primary">Autopro</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your complete automotive ecosystem - Parts, Services & Vehicle History
          </p>

          {/* Search Bar Placeholder */}
          <div className="max-w-2xl mx-auto bg-surface-1 rounded-lg p-4 border border-primary/20">
            <div className="text-gray-400">
              🔍 Search by VIN, Part Number, or Vehicle Model...
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* 🚗 QUICK WIN #5: "Find Parts for My Car" CTA */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-surface-1 rounded-2xl border border-primary/20 p-8 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Find Parts for Your Car
              </h2>
              <p className="text-sm text-gray-500">
                {hasVehicles
                  ? "Your garage is ready — search compatible parts instantly"
                  : "Add your vehicle to unlock instant part matching"}
              </p>
            </div>
          </div>

          {/* Vehicle Card or Empty State */}
          {hasVehicles ? (
            <div className="bg-canvas rounded-xl p-4 mb-6 border border-surface-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {primaryVehicle?.make} {primaryVehicle?.model}{" "}
                      {primaryVehicle?.year}
                    </p>
                    {primaryVehicle?.vin && (
                      <p className="text-xs text-gray-500 font-mono">
                        VIN: {primaryVehicle.vin.slice(0, 8)}...
                      </p>
                    )}
                  </div>
                </div>

                {extraCount > 0 && (
                  <Link
                    href="/garage"
                    className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                  >
                    +{extraCount} more vehicle{extraCount > 1 ? "s" : ""}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-canvas rounded-xl p-6 mb-6 border border-dashed border-surface-2 text-center">
              <Car className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 mb-4">
                No vehicles in your garage yet
              </p>
              <Link
                href="/garage"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Your First Car
              </Link>
            </div>
          )}

          {/* CTA Button */}
          <Link
            href={hasVehicles ? "/search" : "/garage"}
            className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
          >
            <Search className="w-5 h-5" />
            {hasVehicles ? "Find Compatible Parts" : "Add Car & Start Shopping"}
          </Link>

          {/* Trust Microcopy */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-primary" />
              VIN-verified matches
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-primary" />
              Instant results
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              100% compatible
            </span>
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-surface-1 rounded-lg p-6 border border-surface-2 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Compatible Parts
            </h3>
            <p className="text-gray-400">
              Find parts that perfectly match your vehicle using our advanced
              compatibility engine
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-surface-1 rounded-lg p-6 border border-surface-2 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Book Services
            </h3>
            <p className="text-gray-400">
              Connect with trusted mechanics and book appointments instantly
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-surface-1 rounded-lg p-6 border border-surface-2 hover:border-primary/50 transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Vehicle History
            </h3>
            <p className="text-gray-400">
              Track maintenance, repairs, and service history for all your
              vehicles
            </p>
          </div>
        </div>
      </div>

      {/* ─── Footer ─── */}
      <footer className="bg-surface-1 border-t border-surface-2 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2026 Autopro. Built for Algeria & Nigeria.</p>
        </div>
      </footer>
    </main>
  );
                      }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className="text-2xl font-bold text-white">Autopro</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-surface-1 rounded-xl border border-surface-2 p-8">
          
          {/* Toggle */}
          <div className="flex bg-canvas rounded-lg p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                isLogin ? "bg-primary text-white" : "text-gray-400"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                !isLogin ? "bg-primary text-white" : "text-gray-400"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-canvas border border-surface-2 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-canvas border border-surface-2 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-canvas border border-surface-2 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full bg-canvas border border-surface-2 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end mb-6">
                <Link href="/forgot-password" className="text-primary text-sm hover:underline">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-surface-2"></div>
            <span className="px-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-1 border-t border-surface-2"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 bg-canvas border border-surface-2 rounded-lg py-3 hover:border-primary/50 transition-colors">
              <span>📱</span>
              <span className="text-white">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-canvas border border-surface-2 rounded-lg py-3 hover:border-primary/50 transition-colors">
              <span>📘</span>
              <span className="text-white">Facebook</span>
            </button>
          </div>

          {/* Account Type Info */}
          {!isLogin && (
            <div className="mt-6 p-4 bg-canvas rounded-lg border border-primary/20">
              <p className="text-sm text-gray-400">
                <span className="text-primary font-medium">Want to sell parts or offer services?</span>
                <br />
                Register as a customer first, then upgrade to a Business account from your dashboard.
              </p>
            </div>
          )}
        </div>

        {/* Footer Link */}
        <p className="text-center text-gray-500 mt-6">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary hover:underline"
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </div>
    </main>
  );
            }

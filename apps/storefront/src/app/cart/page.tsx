"use client";

import { useState } from "react";
import Link from "next/link";

const demoCartItems = [
  { id: 1, name: "Brake Pad Set - Front", brand: "Bosch", price: 4500, quantity: 1, image: "🔧", compatibility: "Universal" },
  { id: 2, name: "Oil Filter", brand: "Mann", price: 1200, quantity: 2, image: "⚙️", compatibility: "BMW 3 Series" },
  { id: 3, name: "Spark Plugs (Set of 4)", brand: "NGK", price: 2800, quantity: 1, image: "⚡", compatibility: "Toyota Corolla" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(demoCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 10000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-canvas">
      {/* Page Header */}
      <div className="bg-surface-1 border-b border-surface-2 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Shopping Cart
          </h1>
          <p className="text-gray-400 mt-1">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-surface-1 rounded-lg border border-surface-2 overflow-hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-4 flex gap-4 ${
                      index !== cartItems.length - 1 ? "border-b border-surface-2" : ""
                    }`}
                  >
                    {/* Item Image */}
                    <div className="bg-canvas rounded-lg w-20 h-20 flex items-center justify-center text-4xl flex-shrink-0">
                      {item.image}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="text-xs text-primary font-medium">{item.brand}</p>
                          <h3 className="font-semibold text-white">{item.name}</h3>
                          <p className="text-gray-500 text-sm">🚗 {item.compatibility}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Price & Quantity */}
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-canvas rounded-lg border border-surface-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 text-gray-400 hover:text-white transition-colors"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 text-white font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-1 text-gray-400 hover:text-white transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-bold text-primary">
                          {(item.price * item.quantity).toLocaleString()} DZD
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link
                href="/search"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mt-4 transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:w-96">
              <div className="bg-surface-1 rounded-lg border border-surface-2 p-6 sticky top-20">
                <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

                {/* Promo Code */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-canvas border border-surface-2 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                  />
                  <button className="bg-surface-2 hover:bg-primary text-white px-4 py-2 rounded-lg transition-colors">
                    Apply
                  </button>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>{subtotal.toLocaleString()} DZD</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-500">FREE</span>
                      ) : (
                        `${shipping.toLocaleString()} DZD`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-500">
                      Free shipping on orders over 10,000 DZD
                    </p>
                  )}
                  <hr className="border-surface-2" />
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">{total.toLocaleString()} DZD</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-semibold transition-colors mb-3">
                  Proceed to Checkout
                </button>

                {/* Trust Badges */}
                <div className="flex justify-center gap-4 text-gray-500 text-sm">
                  <span>🔒 Secure</span>
                  <span>🚚 Fast Delivery</span>
                  <span>↩️ Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="text-center py-16">
            <span className="text-6xl block mb-4">🛒</span>
            <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Add some parts to get started!</p>
            <Link
              href="/search"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Parts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
                    }

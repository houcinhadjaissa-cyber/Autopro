"use client";

import React, { useState } from "react";

const LockIcon = () => (
  <svg className="w-4 h-4 text-green-600 mr-1.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const pricePerItem = 45.99;
  const subtotal = pricePerItem * quantity;
  const shipping = 0.00; // Free
  const total = subtotal + shipping;

  if (isCheckedOut) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 pb-24 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">✓</div>
        <h2 className="text-xl font-bold text-gray-900">Order Placed Successfully!</h2>
        <p className="text-xs text-gray-500 mt-2 max-w-xs">Your parts are being processed for VIN-verified dispatch. A confirmation has been sent.</p>
        <button onClick={() => setIsCheckedOut(false)} className="mt-6 text-xs font-bold text-[#65a30d] underline">Back to Cart</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-4">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Secure Checkout</h1>

      {/* Cart Item */}
      {quantity > 0 ? (
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs mb-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">VIN Verified</span>
              <h3 className="font-bold text-sm text-gray-900 mt-1">Premium Ceramic Brake Pads</h3>
              <p className="text-xs text-gray-400 mt-0.5">OEM-74829</p>
            </div>
            <div className="text-right font-black text-sm text-gray-900">${pricePerItem}</div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
            <button onClick={() => setQuantity(0)} className="text-xs font-semibold text-red-500">Remove</button>
            <div className="flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-lg p-1">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-6 h-6 bg-white rounded shadow-2xs text-gray-600 font-bold">-</button>
              <span className="text-xs font-bold text-gray-900 px-2">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="w-6 h-6 bg-white rounded shadow-2xs text-gray-600 font-bold">+</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-2xs mb-4 text-xs text-gray-400 font-medium">
          Your cart is empty.
          <button onClick={() => setQuantity(1)} className="block mx-auto mt-2 text-[#65a30d] font-bold underline">Add Sample Item Back</button>
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-2xs space-y-2 mb-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Summary</h3>
        <div className="flex justify-between text-xs text-gray-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between text-xs text-gray-600"><span>Shipping</span><span className="text-green-600 font-bold">FREE</span></div>
        <div className="flex justify-between text-xs text-gray-600"><span>Taxes</span><span>$0.00</span></div>
        <div className="flex justify-between text-sm font-black text-gray-900 pt-2 border-t border-gray-50"><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>

      {/* Indestructible Checkout Button */}
      <button
        disabled={quantity === 0}
        onClick={() => setIsCheckedOut(true)}
        className="w-full bg-[#65a30d] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl text-sm shadow-md active:scale-95 transition-all flex items-center justify-center"
      >
        <LockIcon /> Pay Securely (${total.toFixed(2)})
      </button>
      <p className="text-[10px] text-center text-gray-400 mt-2">🔒 256-Bit SSL Encryption • Instant Dispatch</p>
    </div>
  );
}

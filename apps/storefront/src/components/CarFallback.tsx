"use client";

import { getBrandColor } from "@/lib/carQuery";

interface CarFallbackProps {
  make: string;
  className?: string;
}

/**
 * CSS-only car silhouette fallback.
 * SVG car outline filled with the brand's primary color.
 * Shows when catalog image fails or is unavailable.
 */
export default function CarFallback({
  make,
  className = "",
}: CarFallbackProps) {
  const color = getBrandColor(make);

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white ${className}`}
    >
      <svg
        viewBox="0 0 200 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[160px] max-h-[80px]"
        style={{ color }}
        opacity="0.8"
      >
        {/* Car body */}
        <path d="M20 75 L35 50 L60 40 L140 40 L165 50 L180 75 L180 85 L20 85 Z" />
        {/* Roof */}
        <path d="M55 40 L70 20 L130 20 L145 40 Z" opacity="0.9" />
        {/* Front windshield */}
        <path
          d="M62 38 L72 22 L90 22 L90 38 Z"
          fill="white"
          opacity="0.4"
        />
        {/* Rear windshield */}
        <path
          d="M110 22 L138 38 L130 38 L98 22 Z"
          fill="white"
          opacity="0.4"
        />
        {/* Front wheel */}
        <circle cx="55" cy="85" r="18" />
        <circle cx="55" cy="85" r="11" fill="white" opacity="0.3" />
        <circle cx="55" cy="85" r="7" fill="currentColor" opacity="0.6" />
        {/* Rear wheel */}
        <circle cx="145" cy="85" r="18" />
        <circle cx="145" cy="85" r="11" fill="white" opacity="0.3" />
        <circle cx="145" cy="85" r="7" fill="currentColor" opacity="0.6" />
        {/* Headlights */}
        <rect
          x="170"
          y="60"
          width="12"
          height="6"
          rx="2"
          fill="#FFD700"
          opacity="0.8"
        />
        {/* Taillights */}
        <rect
          x="18"
          y="60"
          width="10"
          height="6"
          rx="2"
          fill="#FF4444"
          opacity="0.8"
        />
      </svg>
      <p className="text-[10px] mt-1 font-medium" style={{ color }}>
        {make}
      </p>
    </div>
  );
}

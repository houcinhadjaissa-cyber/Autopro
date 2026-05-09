// Car image resolution system
// Priority: User photo → NHTSA VIN data → CSS fallback

import { getBrandColor } from "./carQuery";

/**
 * Attempt to get a real car image URL.
 * Uses Car Imagin if available, falls back to CSS component.
 *
 * NOTE: Car Imagin API is unreliable.
 * The CSS CarFallback component is the PRIMARY visual.
 * This URL is a BONUS if it loads.
 */
export function getCarImageUrl(
  make: string,
  model: string,
  year?: number
): string {
  // Car Imagin — may or may not work
  const yearStr = year ? ` ${year}` : "";
  const search = encodeURIComponent(`${make} ${model}${yearStr}`);
  return `https://www.carimagery.org/api.asmx/GetImageUrl?search=${search}`;
}

export { getBrandColor, brandColors } from "./carQuery";

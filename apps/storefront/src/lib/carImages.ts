// Car Imagin API — 7zap-style car images by make/model/year
// Uses carimagery.org (free, no API key needed)

const BASE_URL = "https://www.carimagery.org/api.asmx/GetImageUrl";

/**
 * Returns a Car Imagin API URL that auto-fetches
 * the correct car photo by make, model, year.
 * 
 * Works like 7zap — shows exact car photo for that specific model.
 * Falls back to CSS component if image fails to load.
 * 
 * Usage: <img src={getCarImageUrl("Toyota", "Camry", 2022)} />
 */
export function getCarImageUrl(
  make: string,
  model: string,
  year?: number
): string {
  const yearStr = year ? ` ${year}` : "";
  const search = encodeURIComponent(`${make} ${model}${yearStr}`);
  return `${BASE_URL}?search=${search}`;
}

/**
 * Brand colors for CSS fallback silhouettes.
 * Matches each car brand's official/primary color.
 */
export const brandColors: Record<string, string> = {
  toyota: "#EB0A1E",
  honda: "#CC0000",
  bmw: "#0066B1",
  mercedes: "#00ADEF",
  peugeot: "#1F3C71",
  renault: "#FFCC00",
  hyundai: "#002C5F",
  ford: "#003478",
  volkswagen: "#001E50",
  audi: "#BB0A30",
  nissan: "#C3002F",
  kia: "#05141F",
  mazda: "#101010",
  chevrolet: "#D4AF37",
  fiat: "#8B1F41",
  citroen: "#6B2D5B",
  opel: "#F7D100",
  seat: "#E81B23",
  skoda: "#4BA82E",
  mitsubishi: "#E60012",
  suzuki: "#E30A1C",
  subaru: "#003478",
  default: "#6B7280",
};

/**
 * Get brand color by make name (case-insensitive).
 */
export function getBrandColor(make: string): string {
  return brandColors[make.toLowerCase()] || brandColors.default;
}

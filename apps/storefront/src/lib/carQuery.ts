// CarQuery API — FREE, no API key needed
// Docs: https://www.carqueryapi.com/documentation/3.0/

const BASE = "https://www.carqueryapi.com/api/3.0/";

export interface CarMake {
  make_id: string;
  make_display: string;
  make_country: string;
}

export interface CarModel {
  model_name: string;
  model_make_id: string;
  model_year: string;
  model_body: string;
  model_engine_fuel: string;
  model_engine_power_ps: string;
  model_transmission_type: string;
  model_seats: string;
}

/**
 * Fetch ALL car makes (Toyota, Honda, BMW, etc.)
 * Sorted alphabetically.
 */
export async function fetchMakes(): Promise<CarMake[]> {
  try {
    const res = await fetch(`${BASE}?cmd=getMakes&sold_in_us=0`);
    const data = await res.json();
    return data.Makes || [];
  } catch (err) {
    console.error("Failed to fetch makes:", err);
    return [];
  }
}

/**
 * Fetch ALL models for a specific make.
 * Example: fetchModels("toyota") → Camry, Corolla, Hilux...
 */
export async function fetchModels(makeId: string): Promise<CarModel[]> {
  try {
    const res = await fetch(
      `${BASE}?cmd=getModels&make=${encodeURIComponent(makeId)}`
    );
    const data = await res.json();
    return data.Models || [];
  } catch (err) {
    console.error("Failed to fetch models:", err);
    return [];
  }
}

/**
 * Fetch specific car data by make + model + year.
 * Returns engine, fuel, transmission, body style, etc.
 */
export async function fetchCarByYear(
  makeId: string,
  modelId: string,
  year: string
): Promise<CarModel | null> {
  try {
    const res = await fetch(
      `${BASE}?cmd=getTrims&make=${encodeURIComponent(
        makeId
      )}&model=${encodeURIComponent(modelId)}&year=${year}`
    );
    const data = await res.json();
    return data.Trims?.[0] || null;
  } catch (err) {
    console.error("Failed to fetch car:", err);
    return null;
  }
}

/**
 * Brand colors for CSS fallback silhouettes.
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

export function getBrandColor(make: string): string {
  return brandColors[make.toLowerCase()] || brandColors.default;
  }

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Vehicle {
  id: string;
  autoproVehicleId: string;
  vin?: string;
  make: string;
  model: string;
  year: number;
  engine?: string;
  fuelType?: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  transmission?: 'manual' | 'automatic';
  mileage?: number;
  color?: string;
  bodyStyle?: string;
  driveType?: string;
  marketRegion?: string;
  imageUrl?: string;
  lastServiceDate?: string;
  lastServiceMileage?: number;
  notes?: string;
}

interface GarageStore {
  vehicles: Vehicle[];
  addVehicle: (vehicle: Omit<Vehicle, 'id' | 'autoproVehicleId'>) => void;
  updateVehicle: (id: string, data: Partial<Vehicle>) => void;
  removeVehicle: (id: string) => void;
  getVehicle: (id: string) => Vehicle | undefined;
  vehicleCount: () => number;
  primaryVehicle: () => Vehicle | undefined;
}

// 7zap-style default image by make
const getDefaultImage = (make: string): string => {
  const makeLower = make.toLowerCase();
  const defaults: Record<string, string> = {
    toyota: '/images/vehicles/default-toyota.png',
    honda: '/images/vehicles/default-honda.png',
    bmw: '/images/vehicles/default-bmw.png',
    mercedes: '/images/vehicles/default-mercedes.png',
    peugeot: '/images/vehicles/default-peugeot.png',
    renault: '/images/vehicles/default-renault.png',
    hyundai: '/images/vehicles/default-hyundai.png',
    ford: '/images/vehicles/default-ford.png',
  };
  return defaults[makeLower] || '/images/vehicles/default-car.png';
};

export const useGarageStore = create<GarageStore>()(
  persist(
    (set, get) => ({
      vehicles: [],
      
      addVehicle: (vehicle) => set((state) => {
        const id = `veh_${Date.now()}`;
        const countryCode = vehicle.marketRegion || 'DZ';
        const vinHash = vehicle.vin ? vehicle.vin.substring(0, 8) : 'no_vin';
        const ulid = id;
        const autoproVehicleId = `VEH_${countryCode}_${vinHash}_${ulid}`;
        
        // Auto-set default image if user didn't upload one
        const imageUrl = vehicle.imageUrl || getDefaultImage(vehicle.make);
        
        return {
          vehicles: [...state.vehicles, { 
            ...vehicle, 
            id, 
            autoproVehicleId, 
            imageUrl 
          }],
        };
      }),
      
      updateVehicle: (id, data) => set((state) => ({
        vehicles: state.vehicles.map((v) =>
          v.id === id ? { ...v, ...data } : v
        ),
      })),
      
      removeVehicle: (id) => set((state) => ({
        vehicles: state.vehicles.filter((v) => v.id !== id),
      })),
      
      getVehicle: (id) => get().vehicles.find((v) => v.id === id),
      
      vehicleCount: () => get().vehicles.length,
      
      primaryVehicle: () => get().vehicles[0],
    }),
    { name: 'autopro-garage' }
  )
);

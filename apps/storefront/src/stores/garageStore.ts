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

export const useGarageStore = create<GarageStore>()(
  persist(
    (set, get) => ({
      vehicles: [],
      
      addVehicle: (vehicle) => set((state) => {
        const id = `veh_${Date.now()}`;
        const countryCode = 'DZ';
        const vinHash = vehicle.vin ? vehicle.vin.substring(0, 8) : 'no_vin';
        const ulid = id;
        const autoproVehicleId = `VEH_${countryCode}_${vinHash}_${ulid}`;
        
        return {
          vehicles: [...state.vehicles, { ...vehicle, id, autoproVehicleId }],
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

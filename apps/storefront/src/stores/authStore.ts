import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  globalUserId: string;
  email: string;
  name: string;
  roles: string[];
  country: string;
  currency: string;
  language: string;
  riskScore: number;
  vehiclePrivacyDefault: 'private' | 'followers' | 'public';
  twoFactorEnabled: boolean;
  isVIP: boolean;
}

interface AuthStore {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  mockLogin: () => void;
}

const mockUser: User = {
  id: 'user_001',
  globalUserId: 'auto_autopro_user_01JZ8X9Y2K3M4N5P6Q7R8S9T0',
  email: 'alex@autopro.demo',
  name: 'Alex',
  roles: ['client'],
  country: 'DZ',
  currency: 'DZD',
  language: 'ar',
  riskScore: 85,
  vehiclePrivacyDefault: 'private',
  twoFactorEnabled: false,
  isVIP: false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      
      login: async (email: string, password: string) => {
        // Mock login — replace with Supabase auth later
        if (email === 'alex@autopro.demo' && password === 'demo1234') {
          set({ user: mockUser, isLoggedIn: true });
          return true;
        }
        return false;
      },
      
      logout: () => set({ user: null, isLoggedIn: false }),
      
      mockLogin: () => set({ user: mockUser, isLoggedIn: true }),
    }),
    { name: 'autopro-auth' }
  )
);

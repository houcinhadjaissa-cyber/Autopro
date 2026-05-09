import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsStore {
  country: string;
  currency: string;
  language: string;
  theme: 'day' | 'night';
  setCountry: (country: string) => void;
  setCurrency: (currency: string) => void;
  setLanguage: (language: string) => void;
  toggleTheme: () => void;
  setTheme: (theme: 'day' | 'night') => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      country: 'DZ',
      currency: 'DZD',
      language: 'ar',
      theme: 'day',
      
      setCountry: (country) => set({ country }),
      setCurrency: (currency) => set({ currency }),
      setLanguage: (language) => set({ language }),
      
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'day' ? 'night' : 'day',
      })),
      
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'autopro-settings' }
  )
);

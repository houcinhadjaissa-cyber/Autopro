import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PaymentMethod {
  id: string;
  type: 'card' | 'cod' | 'bank_transfer' | 'mobile_money' | 'wallet';
  label: string;
  isDefault: boolean;
  details: Record<string, string>;
}

export interface SavedAddress {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  wilaya?: string;
  commune?: string;
  state?: string;
  lga?: string;
  street: string;
  isDefault: boolean;
}

interface PaymentStore {
  paymentMethods: PaymentMethod[];
  addresses: SavedAddress[];
  addPaymentMethod: (method: Omit<PaymentMethod, 'id'>) => void;
  removePaymentMethod: (id: string) => void;
  setDefaultPayment: (id: string) => void;
  addAddress: (address: Omit<SavedAddress, 'id'>) => void;
  removeAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  defaultPayment: () => PaymentMethod | undefined;
  defaultAddress: () => SavedAddress | undefined;
}

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set, get) => ({
      paymentMethods: [
        { id: 'pm_1', type: 'cod', label: 'Cash on Delivery', isDefault: true, details: {} },
        { id: 'pm_2', type: 'card', label: 'CIB Card', isDefault: false, details: { last4: '4242' } },
      ],
      addresses: [
        {
          id: 'addr_1',
          label: 'Home',
          fullName: 'Alex',
          phone: '+213 555 123 456',
          wilaya: '16',
          commune: 'Alger Centre',
          street: '123 Rue Didouche Mourad',
          isDefault: true,
        },
      ],
      
      addPaymentMethod: (method) => set((state) => ({
        paymentMethods: [
          ...state.paymentMethods,
          { ...method, id: `pm_${Date.now()}` },
        ],
      })),
      
      removePaymentMethod: (id) => set((state) => ({
        paymentMethods: state.paymentMethods.filter((pm) => pm.id !== id),
      })),
      
      setDefaultPayment: (id) => set((state) => ({
        paymentMethods: state.paymentMethods.map((pm) => ({
          ...pm,
          isDefault: pm.id === id,
        })),
      })),
      
      addAddress: (address) => set((state) => ({
        addresses: [
          ...state.addresses,
          { ...address, id: `addr_${Date.now()}` },
        ],
      })),
      
      removeAddress: (id) => set((state) => ({
        addresses: state.addresses.filter((a) => a.id !== id),
      })),
      
      setDefaultAddress: (id) => set((state) => ({
        addresses: state.addresses.map((a) => ({
          ...a,
          isDefault: a.id === id,
        })),
      })),
      
      defaultPayment: () => get().paymentMethods.find((pm) => pm.isDefault),
      defaultAddress: () => get().addresses.find((a) => a.isDefault),
    }),
    { name: 'autopro-payment' }
  )
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type OrderStatus = 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

export interface Order {
  id: string;
  orderNumber: string;
  items: { productId: string; name: string; price: number; quantity: number }[];
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: 'card' | 'cod' | 'bank_transfer' | 'mobile_money' | 'wallet';
  createdAt: string;
  updatedAt: string;
  vehicleId?: string;
  supplierId?: string;
  trackingNumber?: string;
}

interface OrdersStore {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  getOrder: (id: string) => Order | undefined;
  recentOrders: () => Order[];
}

export const useOrdersStore = create<OrdersStore>()(
  persist(
    (set, get) => ({
      orders: [],
      
      addOrder: (order) => set((state) => {
        const id = `ord_${Date.now()}`;
        const orderNumber = `ORD-${new Date().getFullYear()}-${String(state.orders.length + 1).padStart(6, '0')}`;
        const now = new Date().toISOString();
        
        return {
          orders: [
            ...state.orders,
            {
              ...order,
              id,
              orderNumber,
              createdAt: now,
              updatedAt: now,
            },
          ],
        };
      }),
      
      updateOrderStatus: (id, status) => set((state) => ({
        orders: state.orders.map((o) =>
          o.id === id ? { ...o, status, updatedAt: new Date().toISOString() } : o
        ),
      })),
      
      getOrder: (id) => get().orders.find((o) => o.id === id),
      
      recentOrders: () => get().orders.slice(-10).reverse(),
    }),
    { name: 'autopro-orders' }
  )
);

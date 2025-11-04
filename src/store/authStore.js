import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password, role) => {
        // Mock login - in real app, call API
        const mockUser = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name: email.split('@')[0],
          role,
        };
        set({ user: mockUser, isAuthenticated: true });
      },
      signup: async (email, password, name, role) => {
        // Mock signup - in real app, call API
        const mockUser = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
          role,
        };
        set({ user: mockUser, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: 'learner' | 'creator') => Promise<void>;
  signup: (email: string, password: string, name: string, role: 'learner' | 'creator') => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string, role: 'learner' | 'creator') => {
        // Mock login - in real app, call API
        const mockUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name: email.split('@')[0],
          role,
        };
        set({ user: mockUser, isAuthenticated: true });
      },
      signup: async (email: string, password: string, name: string, role: 'learner' | 'creator') => {
        // Mock signup - in real app, call API
        const mockUser: User = {
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

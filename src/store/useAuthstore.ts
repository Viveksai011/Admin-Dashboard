import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const cookieStorage = {
  getItem: (name: string): string | null => {
    if (typeof window === "undefined") return null;
    const cookies = document.cookie.split("; ").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>,
    );
    return cookies[name] || null;
  },
  setItem: (name: string, value: string): void => {
    if (typeof window === "undefined") return;
    document.cookie = `${name}=${value}; path=/; max-age=2592000`;
  },
  removeItem: (name: string): void => {
    if (typeof window === "undefined") return;
    document.cookie = `${name}=; path=/; max-age=0`;
  },
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => cookieStorage),
    },
  ),
);

export default useAuthStore;

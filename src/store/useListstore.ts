import { create } from "zustand";

interface Car {
  id: string;
  name: string;
  avatar: string;
  modale: string;
  availability: boolean;
  Status: string;
  createdAt: string;
  Price: number;
}

interface ListStore {
  cars: Car[];
  setCars: (cars: Car[]) => void;
  refreshCars: () => Promise<void>;
}

export const useListStore = create<ListStore>((set) => ({
  cars: [],
  setCars: (cars) => set({ cars }),
  refreshCars: async () => {
    try {
      const res = await fetch("/api/carddetails");
      const data = await res.json();
      set({ cars: data });
    } catch (error) {
      console.error("Error refreshing car data:", error);
    }
  },
}));

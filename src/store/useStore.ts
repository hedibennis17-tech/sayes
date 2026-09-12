import { create } from "zustand";
import type { UserProfile, Activity, City } from "@/types";

interface SaYesStore {
  // Auth
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;

  // City
  currentCity: City | null;
  setCurrentCity: (city: City) => void;

  // Activities feed
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
  appendActivities: (activities: Activity[]) => void;

  // Map
  mapCenter: { lat: number; lng: number };
  setMapCenter: (center: { lat: number; lng: number }) => void;
  mapZoom: number;
  setMapZoom: (zoom: number) => void;

  // UI
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

export const useStore = create<SaYesStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  currentCity: null,
  setCurrentCity: (currentCity) => set({ currentCity }),

  activities: [],
  setActivities: (activities) => set({ activities }),
  appendActivities: (more) =>
    set((state) => ({ activities: [...state.activities, ...more] })),

  mapCenter: { lat: 45.5017, lng: -73.5673 }, // Montréal default
  setMapCenter: (mapCenter) => set({ mapCenter }),
  mapZoom: 12,
  setMapZoom: (mapZoom) => set({ mapZoom }),

  activeFilter: null,
  setActiveFilter: (activeFilter) => set({ activeFilter }),
}));

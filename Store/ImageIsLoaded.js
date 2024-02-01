import { create } from "zustand";

export const useImageHasLoadedStore = create((set) => ({
  loaded: false,
  handleImageHasLoaded: () => set(() => ({ loaded: true })),
  handleImageHasNotLoaded: () => set(() => ({ loaded: false })),
}));

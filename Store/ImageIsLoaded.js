import { create } from "zustand";

export const useImageIsLoadedStore = create((set) => ({
  loaded: false,
  handleImageIsLoaded: () =>
    set((state) => ({ loaded: state.loaded === true })),
  handleImageIsNotLoaded: () =>
    set((state) => ({ loaded: state.loaded === false })),
}));

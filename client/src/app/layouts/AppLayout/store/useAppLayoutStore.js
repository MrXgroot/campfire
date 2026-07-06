import { create } from "zustand";

const useAppLayoutStore = create((set) => ({
  isSidebarOpen: false,

  openSidebar: () =>
    set({
      isSidebarOpen: true,
    }),

  closeSidebar: () =>
    set({
      isSidebarOpen: false,
    }),

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),
}));

export default useAppLayoutStore;

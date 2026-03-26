import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UiState {
  sidebarOpen: boolean;
  commandPaletteOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (v: boolean) => void;
  setCommandPaletteOpen: (v: boolean) => void;
}

export const useUiStore = create<UiState>()(
  devtools(
    (set) => ({
      sidebarOpen: true,
      commandPaletteOpen: false,
      toggleSidebar: () =>
        set((s) => ({ sidebarOpen: !s.sidebarOpen }), false, "toggleSidebar"),
      setSidebarOpen: (v) =>
        set({ sidebarOpen: v }, false, "setSidebarOpen"),
      setCommandPaletteOpen: (v) =>
        set({ commandPaletteOpen: v }, false, "setCommandPaletteOpen"),
    }),
    { name: "ui-store" }
  )
);

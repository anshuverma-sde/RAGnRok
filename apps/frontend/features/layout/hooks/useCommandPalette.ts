"use client";

import { useEffect } from "react";
import { useUiStore } from "../store/uiStore";

/**
 * Registers Cmd+K / Ctrl+K shortcut to open the CommandPalette.
 * Call this hook once in the AppShell.
 */
export function useCommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useUiStore();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setCommandPaletteOpen]);

  return { commandPaletteOpen, setCommandPaletteOpen };
}

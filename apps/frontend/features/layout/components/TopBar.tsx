"use client";

import { Search } from "lucide-react";
import { APP_CONFIG } from "@/globals/app-config";
import { useUiStore } from "../store/uiStore";

export function TopBar({ title }: { title?: string }) {
  const { setCommandPaletteOpen } = useUiStore();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b-0 bg-[#131313]/80 backdrop-blur-md px-6">
      {/* Page title */}
      <h1 className="font-display text-base font-semibold text-[#E5E2E1] flex-1 tracking-tight">
        {title ?? APP_CONFIG.name}
      </h1>

      {/* Command palette trigger */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        aria-label="Open command palette (Ctrl+K)"
        className="flex items-center gap-2 rounded-xl bg-[#1C1B1B] px-3 py-2 text-sm text-[#908FA0] hover:text-[#E5E2E1] transition-colors min-w-[180px]"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Search…</span>
        <kbd className="rounded-md bg-[#2A2A2A] px-1.5 py-0.5 text-[10px] font-mono text-[#C7C4D7]">
          ⌘K
        </kbd>
      </button>
    </header>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { ROUTES } from "@/globals/routes";
import { useCommandPalette } from "../hooks/useCommandPalette";

export function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useCommandPalette();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = ROUTES.filter(
    (r) =>
      r.label.toLowerCase().includes(query.toLowerCase()) ||
      (r.description?.toLowerCase() ?? "").includes(query.toLowerCase())
  );

  const handle = (path: string) => {
    router.push(path);
    setCommandPaletteOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setCommandPaletteOpen(false)}
          />

          {/* Palette */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(32,32,31,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 0 60px 0 rgba(192,193,255,0.1)",
            }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-[#464554]/20 px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-[#C0C1FF]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages…"
                className="flex-1 bg-transparent text-sm text-[#E5E2E1] placeholder:text-[#908FA0] outline-none"
              />
              <button
                onClick={() => setCommandPaletteOpen(false)}
                className="text-[#908FA0] hover:text-[#E5E2E1] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results */}
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-[#908FA0]">
                  No results for &quot;{query}&quot;
                </li>
              )}
              {filtered.map((route) => {
                const Icon = route.icon;
                return (
                  <li key={route.id}>
                    <button
                      onClick={() => handle(route.path)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[#2A2A2A]"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2A2A2A]">
                        <Icon className="h-4 w-4 text-[#C0C1FF]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#E5E2E1]">
                          {route.label}
                        </p>
                        {route.description && (
                          <p className="text-xs text-[#908FA0]">
                            {route.description}
                          </p>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

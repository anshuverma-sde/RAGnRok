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
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={() => setCommandPaletteOpen(false)}
          />

          {/* Palette */}
          <motion.div
            key="palette"
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 rounded-sm overflow-hidden shadow-2xl border border-outline-variant/30"
            style={{
              background: "rgba(255, 248, 241, 0.9)", // surface color with opacity
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-outline-variant/20 px-4 py-4 bg-surface-container-lowest/50">
              <Search className="h-5 w-5 shrink-0 text-primary" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search modules..."
                className="flex-1 bg-transparent text-sm font-body text-on-surface placeholder:text-on-surface-variant/50 outline-none"
              />
              <button
                onClick={() => setCommandPaletteOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors bg-surface-container p-1 rounded-sm"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results */}
            <ul className="max-h-72 overflow-y-auto p-2 custom-scrollbar">
              {filtered.length === 0 && (
                <li className="px-4 py-8 text-center text-sm font-mono text-on-surface-variant/70 uppercase tracking-widest">
                  No modules found for "{query}"
                </li>
              )}
              {filtered.map((route) => {
                const Icon = route.icon;
                return (
                  <li key={route.id}>
                    <button
                      onClick={() => handle(route.path)}
                      className="group flex w-full items-center gap-4 rounded-sm px-3 py-3 text-left transition-colors hover:bg-surface-container-highest"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface-container group-hover:bg-primary group-hover:text-on-primary text-on-surface-variant transition-colors shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold font-headline uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors">
                          {route.label}
                        </p>
                        {route.description && (
                          <p className="text-[10px] font-mono mt-0.5 text-on-surface-variant/70 uppercase tracking-widest">
                            {route.description}
                          </p>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
             <div className="bg-surface-container-highest/50 px-4 py-2 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-[9px] font-bold font-label uppercase text-on-surface-variant tracking-widest">Neural Command OS</span>
                <span className="text-[9px] font-mono text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-sm shadow-inner">ESC to cancel</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

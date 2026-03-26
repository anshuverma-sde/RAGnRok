"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { ROUTES } from "@/globals/routes";
import { APP_CONFIG } from "@/globals/app-config";
import { useUiStore } from "../store/uiStore";

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUiStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && sidebarOpen) {
        toggleSidebar();
      }
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen, toggleSidebar]);

  return (
    <motion.aside
      animate={{ width: sidebarOpen ? 240 : 64 }}
      transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.8 }}
      className="relative flex h-screen flex-col overflow-hidden bg-container-low shrink-0"
      style={{ minWidth: 0 }}
    >
      {/* Logo + name */}
      <div className="flex h-14 items-center gap-3 px-4 shrink-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary">
          <span className="text-xs font-bold text-on-primary">RR</span>
        </div>
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="font-display text-sm font-bold text-on-surface whitespace-nowrap tracking-tight">
                {APP_CONFIG.name}
              </p>
              <p className="text-[10px] text-outline whitespace-nowrap">
                {APP_CONFIG.tagline}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-2 py-3 flex flex-col gap-1">
        {ROUTES.map((route) => {
          const Icon = route.icon;
          const isActive =
            route.path === "/"
              ? pathname === "/"
              : pathname.startsWith(route.path);

          return (
            <Link
              key={route.id}
              href={route.path}
              className={[
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-150",
                isActive
                  ? "bg-container text-primary"
                  : "text-outline hover:bg-container hover:text-on-surface",
              ].join(" ")}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-xl bg-container"
                  transition={{ type: "spring", stiffness: 400, damping: 40 }}
                />
              )}
              <Icon
                className="relative z-10 shrink-0 h-5 w-5"
                strokeWidth={isActive ? 2 : 1.5}
              />
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-10 text-sm font-medium whitespace-nowrap"
                  >
                    {route.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={toggleSidebar}
        className="mx-3 mb-4 flex h-9 items-center justify-center rounded-xl text-outline hover:bg-container hover:text-on-surface transition-colors"
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {sidebarOpen ? (
          <PanelLeftClose className="h-4 w-4" />
        ) : (
          <PanelLeftOpen className="h-4 w-4" />
        )}
      </button>
    </motion.aside>
  );
}

"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import dynamic from "next/dynamic";

const CommandPalette = dynamic(() => import("./CommandPalette").then((mod) => mod.CommandPalette), { ssr: false });

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none -z-10"></div>
        {children}
      </div>
      <Footer />
      <CommandPalette />
    </div>
  );
}

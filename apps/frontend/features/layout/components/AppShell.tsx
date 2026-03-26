"use client";

import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import dynamic from "next/dynamic";

const CommandPalette = dynamic(() => import("./CommandPalette").then((mod) => mod.CommandPalette), { ssr: false });

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
}

export function AppShell({ children, title }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#131313]">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        <TopBar title={title} />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
      </div>
      <CommandPalette />
    </div>
  );
}

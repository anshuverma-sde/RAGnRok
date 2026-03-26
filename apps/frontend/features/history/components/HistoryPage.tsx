"use client";

import { motion } from "framer-motion";
import { Card, Typography, CardContent } from "@repo/ui";
import { Clock } from "lucide-react";

export function HistoryPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto p-8 w-full">
      <div className="border-b-4 border-primary pb-4">
        <Typography variant="headline" size="3xl" color="default" className="uppercase font-black text-on-surface">Neural History</Typography>
        <Typography variant="mono" size="xs" color="muted" className="mt-2 tracking-widest uppercase font-bold text-on-surface-variant/70">Browse past execution traces and responses</Typography>
      </div>
      
      <Card level={2} padding="lg" className="flex flex-col items-center justify-center min-h-[400px] text-center gap-6 shadow-sm border border-outline-variant/10 rounded-sm">
        <Typography variant="label" size="xs" color="primary" className="uppercase tracking-[0.2em] mb-2 shadow-sm rounded-sm bg-surface-container px-3 py-1">Log Status: Awaiting Input</Typography>
        <div className="h-24 w-24 rounded-full bg-surface-container-high flex items-center justify-center shadow-inner border border-outline-variant/20">
          <Clock className="h-10 w-10 text-primary opacity-80" />
        </div>
        <CardContent className="flex flex-col items-center gap-2 max-w-md">
          <Typography variant="headline" size="xl" className="font-bold uppercase tracking-tight text-on-surface">No History Initialized</Typography>
          <Typography variant="body" size="sm" color="muted" className="leading-relaxed">Execute your first neural query from the Chat Hub or Comparison Engine to generate execution logs.</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

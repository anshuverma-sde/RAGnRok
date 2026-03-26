"use client";

import { motion } from "framer-motion";
import { Card, Button, Typography, CardContent } from "@repo/ui";
import { Database, Plus } from "lucide-react";

export function SourcesPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto p-8 w-full">
      <div className="flex items-start justify-between border-b-4 border-primary pb-4">
        <div>
          <Typography variant="headline" size="3xl" color="default" className="uppercase font-black text-on-surface">Sources Base</Typography>
          <Typography variant="mono" size="xs" color="muted" className="mt-2 tracking-widest uppercase font-bold text-on-surface-variant/70">Manage RAG knowledge ingestion nodes</Typography>
        </div>
        <Button intent="primary" size="md" className="font-bold text-[10px] uppercase font-label tracking-widest px-6 shadow-sm shadow-primary/20">
          <Plus className="h-4 w-4" /> Add Source
        </Button>
      </div>
      
      <Card level={2} padding="lg" className="flex flex-col items-center justify-center min-h-[400px] text-center gap-6 shadow-sm border border-outline-variant/10 rounded-sm">
        <Typography variant="label" size="xs" color="primary" className="uppercase tracking-[0.2em] mb-2 shadow-sm rounded-sm bg-surface-container px-3 py-1">Node Status: Empty</Typography>
        <div className="h-24 w-24 rounded-full bg-surface-container-high flex items-center justify-center shadow-inner border border-outline-variant/20">
          <Database className="h-10 w-10 text-primary opacity-80" />
        </div>
        <CardContent className="flex flex-col items-center gap-2 max-w-md">
          <Typography variant="headline" size="xl" className="font-bold uppercase tracking-tight text-on-surface">Awaiting Neural Link</Typography>
          <Typography variant="body" size="sm" color="muted" className="leading-relaxed">Mount your first documentary schema or knowledge vector base to initialize the contextual ingestion pipeline.</Typography>
        </CardContent>
        <Button intent="secondary" size="md" className="mt-4 px-8 py-3 text-[10px] font-bold font-label uppercase tracking-widest border border-outline-variant/20 rounded-sm hover:shadow-md transition-shadow">
          <Plus className="h-4 w-4" /> Upload Document
        </Button>
      </Card>
    </div>
  );
}

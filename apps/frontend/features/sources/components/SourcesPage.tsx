"use client";

import { motion } from "framer-motion";
import { Card, Button } from "@repo/ui";
import { Database, Plus } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export function SourcesPage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-[1400px] mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface tracking-tight">Sources</h1>
          <p className="mt-1 text-sm text-outline">Manage your RAG knowledge base sources.</p>
        </div>
        <Button intent="primary" size="md">
          <Plus className="h-4 w-4" /> Add Source
        </Button>
      </div>
      <Card level={2} padding="lg" className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-container-high flex items-center justify-center">
          <Database className="h-7 w-7 text-outline" />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-on-surface">No sources yet</p>
          <p className="text-sm text-outline mt-1">Add your first knowledge base source to get started.</p>
        </div>
        <Button intent="secondary" size="md">
          <Plus className="h-4 w-4" /> Upload Document
        </Button>
      </Card>
    </motion.div>
  );
}

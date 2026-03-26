"use client";

import { motion } from "framer-motion";
import { Card } from "@repo/ui";
import { Clock } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export function HistoryPage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-[1400px] mx-auto">
      <div>
        <h1 className="font-display text-2xl font-bold text-on-surface tracking-tight">History</h1>
        <p className="mt-1 text-sm text-outline">Browse your past queries and comparison results.</p>
      </div>
      <Card level={2} padding="lg" className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
        <div className="h-16 w-16 rounded-2xl bg-container-high flex items-center justify-center">
          <Clock className="h-7 w-7 text-outline" />
        </div>
        <div>
          <p className="font-display text-base font-semibold text-on-surface">No history yet</p>
          <p className="text-sm text-outline mt-1">Your query history will appear here.</p>
        </div>
      </Card>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { QueryInput } from "./QueryInput";
import { SectionBoundary } from "../../../components/boundary/SectionBoundary";

const CompareGrid = dynamic(() => import("./CompareGrid").then((mod) => mod.CompareGrid), { 
  ssr: false, 
  loading: () => <div className="h-64 rounded-xl border border-white/5 bg-white/5 animate-pulse" /> 
});

const pageVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export function ComparePage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 max-w-[1400px] mx-auto"
    >
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-[#E5E2E1] tracking-tight">
          3-Way Compare
        </h1>
        <p className="mt-1 text-sm text-[#908FA0]">
          Run the same query across three RAG engines and compare answers, sources and latency side by side.
        </p>
      </div>

      {/* Query input */}
      <QueryInput />

      {/* Results grid */}
      <SectionBoundary fallbackMessage="Compare grid could not be loaded. Please try again.">
        <CompareGrid />
      </SectionBoundary>
    </motion.div>
  );
}

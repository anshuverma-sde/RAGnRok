"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Skeleton, SkeletonText, Badge } from "@repo/ui";
import { Clock } from "lucide-react";
import type { RagResult } from "../types/rag.types";
import { formatLatency } from "@/lib/utils";

interface RagColumnProps {
  engineLabel: string;
  result: RagResult | null;
  isLoading: boolean;
}

export function RagColumn({ engineLabel, result, isLoading }: RagColumnProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-container-low p-5 min-h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-display text-sm font-semibold text-primary">
          {result?.engineName ?? engineLabel}
        </h2>
        {result && (
          <Badge intent="ai" size="sm" dot>
            <Clock className="h-3 w-3" />
            {formatLatency(result.latencyMs)}
          </Badge>
        )}
        {isLoading && (
          <Skeleton className="h-5 w-20" />
        )}
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 flex-1"
          >
            <SkeletonText lines={5} />
            <div className="mt-auto">
              <Skeleton className="h-3 w-24 mb-2" />
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-8 rounded-xl" />
                <Skeleton className="h-8 rounded-xl" />
              </div>
            </div>
          </motion.div>
        ) : result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 flex-1"
          >
            {/* Answer */}
            <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap">
              {result.answer}
            </p>

            {/* Score bar */}
            {result.confidence != null && (
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-outline">Confidence</span>
                  <span className="text-xs font-medium text-primary">
                    {Math.round(result.confidence * 100)}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-container overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.confidence * 100}%` }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-primary"
                  />
                </div>
              </div>
            )}

            {/* Sources */}
            {result.sources.length > 0 && (
              <div className="mt-auto flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-widest text-outline">
                  Sources
                </p>
                {result.sources.slice(0, 3).map((src) => (
                  <div
                    key={src.id}
                    className="rounded-xl bg-container px-3 py-2 flex items-center justify-between gap-2"
                  >
                    <span className="text-xs text-on-surface-variant truncate">
                      {src.title}
                    </span>
                    <Badge intent="default" size="sm">
                      {Math.round(src.score * 100)}%
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

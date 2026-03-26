"use client";

import { StaggerContainer, StaggerItem } from "@repo/ui";
import { useRagStore } from "../store/ragStore";
import { RagColumn } from "./RagColumn";
import type { EngineId } from "../types/rag.types";

const ENGINE_LABELS: Record<EngineId, string> = {
  a: "Engine A",
  b: "Engine B",
  c: "Engine C",
};

const ENGINES: EngineId[] = ["a", "b", "c"];

export function CompareGrid() {
  const { results, isLoading } = useRagStore();
  const hasData = ENGINES.some((id) => results[id] !== null);

  if (!isLoading && !hasData) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 h-16 w-16 rounded-2xl bg-container-low flex items-center justify-center">
          <span className="text-2xl">⚡</span>
        </div>
        <p className="font-display text-lg font-semibold text-on-surface">
          Ready to compare
        </p>
        <p className="mt-1 text-sm text-outline max-w-xs">
          Enter a query above and click Run Compare to see all three engines respond side by side.
        </p>
      </div>
    );
  }

  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
      delay={0.05}
      stagger={0.12}
    >
      {ENGINES.map((id) => (
        <StaggerItem key={id}>
          <RagColumn
            engineLabel={ENGINE_LABELS[id]}
            result={results[id]}
            isLoading={isLoading}
          />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { EngineId, RagResult } from "../types/rag.types";

interface RagState {
  query: string;
  results: Record<EngineId, RagResult | null>;
  isLoading: boolean;
  error: string | null;
  // Actions
  setQuery: (q: string) => void;
  setResult: (engine: EngineId, result: RagResult) => void;
  setLoading: (v: boolean) => void;
  setError: (e: string | null) => void;
  reset: () => void;
}

const initialResults: Record<EngineId, RagResult | null> = {
  a: null,
  b: null,
  c: null,
};

export const useRagStore = create<RagState>()(
  devtools(
    immer((set) => ({
      query: "",
      results: initialResults,
      isLoading: false,
      error: null,
      setQuery: (q) =>
        set((s) => { s.query = q; }, false, "setQuery"),
      setResult: (engine, result) =>
        set((s) => { s.results[engine] = result; }, false, "setResult"),
      setLoading: (v) =>
        set((s) => { s.isLoading = v; }, false, "setLoading"),
      setError: (e) =>
        set((s) => { s.error = e; }, false, "setError"),
      reset: () =>
        set((s) => {
          s.results = initialResults;
          s.error = null;
          s.isLoading = false;
        }, false, "reset"),
    })),
    { name: "rag-store" }
  )
);

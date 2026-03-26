// RAG engine types
export type EngineId = "a" | "b" | "c";

export interface RagSource {
  id: string;
  title: string;
  url?: string;
  score: number;
}

export interface RagResult {
  engineId: EngineId;
  engineName: string;
  answer: string;
  sources: RagSource[];
  latencyMs: number;
  confidence: number;
  tokenCount?: number;
}

export interface CompareRequest {
  query: string;
  engines: EngineId[];
}

export interface CompareResponse {
  query: string;
  results: RagResult[];
  totalLatencyMs: number;
}

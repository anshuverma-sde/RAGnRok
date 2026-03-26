import api from "@/lib/axios";
import type { CompareRequest, CompareResponse, RagResult } from "../types/rag.types";

export const ragApi = {
  /**
   * POST /api/compare — run all selected engines in parallel on the backend
   */
  compare: (req: CompareRequest): Promise<CompareResponse> =>
    api.post("/api/compare", req),

  /**
   * POST /api/query — single engine query
   */
  query: (query: string, engine: string): Promise<RagResult> =>
    api.post("/api/query", { query, engine }),
};

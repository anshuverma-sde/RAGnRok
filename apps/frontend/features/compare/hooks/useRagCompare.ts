import { useMutation } from "@tanstack/react-query";
import { ragApi } from "../api/rag.api";
import { useRagStore } from "../store/ragStore";
import type { CompareRequest } from "../types/rag.types";

export function useRagCompare() {
  const { setLoading, setResult, setError, reset } = useRagStore();

  return useMutation({
    mutationKey: ["rag", "compare"],
    mutationFn: (req: CompareRequest) => ragApi.compare(req),
    onMutate: () => {
      reset();
      setLoading(true);
    },
    onSuccess: (data) => {
      data.results.forEach((r) => setResult(r.engineId, r));
    },
    onError: (err: Error) => {
      setError(err.message);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
}

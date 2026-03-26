"use client";

import { useState } from "react";
import { Send, RotateCcw } from "lucide-react";
import { Button } from "@repo/ui";
import { useRagCompare } from "../hooks/useRagCompare";
import { useRagStore } from "../store/ragStore";

export function QueryInput() {
  const [localQuery, setLocalQuery] = useState("");
  const { mutate, isPending } = useRagCompare();
  const { reset } = useRagStore();

  const handleSubmit = (e?: React.FormEvent | React.KeyboardEvent) => {
    e?.preventDefault();
    if (!localQuery.trim()) return;
    mutate({ query: localQuery.trim(), engines: ["a", "b", "c"] });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[#1C1B1B] p-4 flex flex-col gap-3"
    >
      <textarea
        id="query-input"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Ask anything — compare how different RAG engines respond…"
        rows={3}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit(e);
        }}
        className="w-full resize-none bg-transparent text-sm text-[#E5E2E1] placeholder:text-[#908FA0] outline-none leading-relaxed"
      />

      <div className="flex items-center justify-between">
        <p className="text-xs text-[#908FA0]">
          <kbd className="rounded bg-[#2A2A2A] px-1 py-0.5 font-mono text-[10px]">⌘↵</kbd>
          {" "}to run
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            intent="ghost"
            size="sm"
            onClick={() => { setLocalQuery(""); reset(); }}
            aria-label="Reset"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </Button>
          <Button
            type="submit"
            intent="primary"
            size="sm"
            loading={isPending}
            disabled={!localQuery.trim()}
          >
            <Send className="h-3.5 w-3.5" />
            Run Compare
          </Button>
        </div>
      </div>
    </form>
  );
}

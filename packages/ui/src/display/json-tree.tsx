"use client";

import * as React from "react";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

interface JsonTreeProps {
  data: JsonValue;
  depth?: number;
  maxDepth?: number;
}

/**
 * Recursive JSON renderer using Quantum Ledger colours:
 * - Keys: tertiary (#4CD6FF)
 * - Strings: secondary (#FFB5A1)
 * - Numbers: primary (#C0C1FF)
 * - Booleans: warning/green
 */
export const JsonTree = ({
  data,
  depth = 0,
  maxDepth = 6,
}: JsonTreeProps) => {
  if (depth > maxDepth) return <span className="text-[#908FA0]">...</span>;

  if (data === null)
    return <span className="text-[#908FA0] italic">null</span>;

  if (typeof data === "boolean")
    return (
      <span className={data ? "text-[#4ADE80]" : "text-[#FFB4AB]"}>
        {String(data)}
      </span>
    );

  if (typeof data === "number")
    return <span className="text-[#C0C1FF]">{data}</span>;

  if (typeof data === "string")
    return <span className="text-[#FFB5A1]">"{data}"</span>;

  if (Array.isArray(data))
    return (
      <span>
        <span className="text-[#908FA0]">{"["}</span>
        <div className="ml-4 flex flex-col gap-0.5">
          {data.map((item, i) => (
            <span key={i}>
              <JsonTree data={item} depth={depth + 1} maxDepth={maxDepth} />
              {i < data.length - 1 && <span className="text-[#464554]">,</span>}
            </span>
          ))}
        </div>
        <span className="text-[#908FA0]">{"]"}</span>
      </span>
    );

  // Object
  const entries = Object.entries(data);
  return (
    <span>
      <span className="text-[#908FA0]">{"{"}</span>
      <div className="ml-4 flex flex-col gap-0.5">
        {entries.map(([key, value], i) => (
          <span key={key} className="flex gap-1">
            <span className="text-[#4CD6FF] opacity-80">"{key}"</span>
            <span className="text-[#464554]">:</span>
            <JsonTree data={value} depth={depth + 1} maxDepth={maxDepth} />
            {i < entries.length - 1 && (
              <span className="text-[#464554]">,</span>
            )}
          </span>
        ))}
      </div>
      <span className="text-[#908FA0]">{"}"}</span>
    </span>
  );
};

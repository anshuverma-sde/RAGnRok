import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely — use everywhere instead of string concat */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format milliseconds as readable latency string */
export function formatLatency(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

/** Truncate text to max characters */
export function truncate(str: string, max = 120): string {
  return str.length > max ? `${str.slice(0, max)}…` : str;
}

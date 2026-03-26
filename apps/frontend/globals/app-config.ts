export const APP_CONFIG = {
  name: "RAGnRok",
  tagline: "3-Way RAG Comparison Tool",
  version: "0.1.0",
  logoPath: "/logo.svg",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000",
} as const;

export type AppConfig = typeof APP_CONFIG;

import { ComparePage } from "@/features/compare/components/ComparePage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Compare" };

export default function CompareRoute() {
  return <ComparePage />;
}

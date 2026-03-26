import { HistoryPage } from "@/features/history/components/HistoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "History" };

export default function HistoryRoute() {
  return <HistoryPage />;
}

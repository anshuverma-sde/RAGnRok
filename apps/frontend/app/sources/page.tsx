import { SourcesPage } from "@/features/sources/components/SourcesPage";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = { title: "Sources" };

export default function SourcesRoute() {
  return <SourcesPage />;
}

import { SettingsPage } from "@/features/settings/components/SettingsPage";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsRoute() {
  return <SettingsPage />;
}

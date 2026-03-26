import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  GitCompareArrows,
  Database,
  Clock,
  Settings,
} from "lucide-react";

export interface RouteConfig {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
  description?: string;
}

export const ROUTES: RouteConfig[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
    description: "Overview and key metrics",
  },
  {
    id: "compare",
    label: "Compare",
    path: "/compare",
    icon: GitCompareArrows,
    description: "3-way RAG engine comparison",
  },
  {
    id: "sources",
    label: "Sources",
    path: "/sources",
    icon: Database,
    description: "Manage knowledge base sources",
  },
  {
    id: "history",
    label: "History",
    path: "/history",
    icon: Clock,
    description: "Previous queries and results",
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: Settings,
    description: "Model and system configuration",
  },
];

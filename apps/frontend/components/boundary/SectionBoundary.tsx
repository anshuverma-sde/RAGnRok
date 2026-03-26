"use client";

import * as React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Card } from "@repo/ui";
import { AlertTriangle } from "lucide-react";

interface SectionBoundaryProps {
  children: React.ReactNode;
  fallbackMessage?: string;
  className?: string;
}

export function SectionBoundary({ children, fallbackMessage = "Failed to load section", className }: SectionBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={
        <Card className={`flex flex-col items-center justify-center p-6 text-center border-error/20 bg-error/5 h-full ${className || ""}`}>
          <AlertTriangle className="h-8 w-8 text-error mb-3 opacity-80" />
          <p className="text-sm font-medium text-error">{fallbackMessage}</p>
        </Card>
      }
    >
      {children}
    </ErrorBoundary>
  );
}

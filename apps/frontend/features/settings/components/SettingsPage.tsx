"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, Typography } from "@repo/ui";
import { Settings } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[800px] mx-auto p-8 w-full">
      <div className="border-b-4 border-primary pb-4">
        <Typography variant="headline" size="3xl" color="default" className="uppercase font-black text-on-surface">System Configuration</Typography>
        <Typography variant="mono" size="xs" color="muted" className="mt-2 tracking-widest uppercase font-bold text-on-surface-variant/70">Engine parameters and API connectivity</Typography>
      </div>
      
      <Card level={3} padding="md" className="border-l-4 border-l-primary rounded-sm shadow-sm bg-surface-container hover:bg-surface-container-highest transition-colors">
        <CardHeader>
          <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
            <div className="bg-surface-container-lowest p-2 rounded-sm shadow-inner">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <Typography variant="headline" size="lg" className="uppercase font-bold tracking-tight text-on-surface">Engine Tuning</Typography>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Typography variant="body" size="sm" color="muted" className="leading-relaxed">
            Neural architecture configuration interface is currently loading constraints. Default inference models are set to nominal thresholds.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

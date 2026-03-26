"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui";
import { Settings } from "lucide-react";

const pageVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export function SettingsPage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" className="flex flex-col gap-6 max-w-[800px]">
      <div>
        <h1 className="font-display text-2xl font-bold text-on-surface tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-outline">Configure RAG engines, API keys and preferences.</p>
      </div>
      <Card level={3} padding="md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-primary" />
            <CardTitle>Engine Configuration</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-outline">Engine configuration coming soon.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

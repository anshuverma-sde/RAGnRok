"use client";

import { motion } from "framer-motion";
import { AnimatedSection, Card, CardHeader, CardTitle, CardContent, Badge } from "@repo/ui";
import { Zap, Database, Clock, TrendingUp } from "lucide-react";
import { APP_CONFIG } from "@/globals/app-config";

const metrics = [
  { label: "Total Queries", value: "—", icon: Zap, intent: "primary" as const },
  { label: "Avg Latency", value: "—", icon: Clock, intent: "ai" as const },
  { label: "Sources Indexed", value: "—", icon: Database, intent: "success" as const },
  { label: "Accuracy Score", value: "—", icon: TrendingUp, intent: "secondary" as const },
];

const pageVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
};

export function DashboardPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8 max-w-[1400px] mx-auto"
    >
      {/* Hero */}
      <div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-on-surface">
          Welcome to{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-primary"
          >
            {APP_CONFIG.name}
          </span>
        </h1>
        <p className="mt-2 text-sm text-outline">{APP_CONFIG.tagline}</p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <AnimatedSection key={m.label} delay={i * 0.08}>
              <Card level={3} padding="md" className="hover:scale-[1.015] transition-transform duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-outline" />
                    <Badge intent={m.intent} size="sm">Live</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-display text-2xl font-bold text-on-surface">{m.value}</p>
                  <p className="text-xs text-outline mt-1">{m.label}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Recent queries placeholder */}
      <AnimatedSection delay={0.3}>
        <Card level={2} padding="md">
          <CardHeader>
            <CardTitle>Recent Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-outline">
              Run your first comparison from the{" "}
              <a href="/compare" className="text-primary hover:underline">
                Compare page
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>
    </motion.div>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";

export function DashboardPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.main 
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-7xl mx-auto w-full"
    >
      <div className="px-6 py-8 md:py-12 space-y-8 relative z-10">
        
        {/* Page Title */}
        <motion.section variants={item}>
          <h1 className="text-3xl md:text-5xl font-bold text-on-surface font-headline tracking-tighter leading-none">Dashboard</h1>
          <p className="text-sm text-on-surface-variant font-medium mt-2 uppercase tracking-widest opacity-70">V2.0.4-STABLE</p>
        </motion.section>

        {/* Metrics: Tonal Tectonics (Vertical Stack) */}
        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest p-5 rounded-sm border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Inference Latency</span>
              <span className="material-symbols-outlined text-primary text-lg">bolt</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold font-headline">124</span>
              <span className="text-sm font-medium text-on-surface-variant">ms</span>
            </div>
            <div className="mt-4 h-1 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[72%]"></div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-5 rounded-sm border-l-4 border-tertiary shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Tokens / Sec</span>
              <span className="material-symbols-outlined text-tertiary text-lg">speed</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold font-headline">84.2</span>
              <span className="text-sm font-medium text-on-surface-variant">k/s</span>
            </div>
            <div className="mt-4 flex gap-1">
              <div className="h-2 flex-1 bg-tertiary/20"></div>
              <div className="h-3 flex-1 bg-tertiary/40"></div>
              <div className="h-5 flex-1 bg-tertiary/60"></div>
              <div className="h-4 flex-1 bg-tertiary/80"></div>
              <div className="h-6 flex-1 bg-tertiary"></div>
            </div>
          </div>
        </motion.section>

        {/* Ingestion Hub (Center) */}
        <motion.section variants={item} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold font-headline tracking-tight">Ingestion Hub</h2>
            <span className="text-[10px] font-bold text-primary uppercase font-label tracking-widest">Active Pipes: 04</span>
          </div>
          <div className="bg-surface-container p-1 rounded-sm shadow-inner">
            <div className="space-y-1">
              
              {/* Ingestion Item 1 */}
              <div className="bg-surface-container-lowest p-4 flex items-center justify-between hover:bg-surface-container-highest transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm">
                    <span className="material-symbols-outlined text-on-surface-variant">description</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Engineering_Wiki.pdf</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-widest">Vectorized • 2.4MB</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              
              {/* Ingestion Item 2 */}
              <div className="bg-surface-container-lowest p-4 flex items-center justify-between hover:bg-surface-container-highest transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm text-primary">
                    <span className="material-symbols-outlined">database</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">PostgreSQL_Main_Sync</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-widest">Indexing • 84%</p>
                  </div>
                </div>
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
              
              {/* Ingestion Item 3 */}
              <div className="bg-surface-container-lowest p-4 flex items-center justify-between hover:bg-surface-container-highest transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded-sm">
                    <span className="material-symbols-outlined text-on-surface-variant">cloud_sync</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">S3_Bucket_Docs</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-widest">Scheduled • Daily</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant opacity-40">pause_circle</span>
              </div>
              
            </div>
          </div>
          <button className="w-full py-4 bg-primary text-on-primary font-bold uppercase text-xs tracking-widest rounded-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">add</span>
            New Data Source
          </button>
        </motion.section>

        {/* Knowledge Map Preview (Asymmetric Layout) */}
        <motion.section variants={item} className="pb-12">
          <div className="bg-surface-container-highest p-6 md:p-10 rounded-sm relative overflow-hidden h-48 md:h-64 flex flex-col justify-end shadow-inner group">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-surface-container-highest to-surface-container-highest"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-3xl font-bold font-headline leading-tight">Knowledge Cluster Mapping</h3>
              <p className="text-xs md:text-sm text-on-surface-variant mt-2 max-w-xl">Visualize document relationships and metadata density across your vector store.</p>
              <button className="mt-4 md:mt-6 text-[10px] font-black uppercase text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore Atlas <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
          </div>
        </motion.section>

      </div>
    </motion.main>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";

export function CompareGrid() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.main 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-[1440px] mx-auto px-8 py-12 w-full"
    >
      {/* Hero Section */}
      <motion.header variants={item} className="mb-16 border-l-4 border-primary pl-8">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface uppercase mb-2">Architectural Battleground</h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Comparative analysis of three core retrieval engines. Measured against enterprise-grade benchmarks for high-frequency neural search.
        </p>
      </motion.header>

      {/* 3-Way Architecture Grid */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-outline-variant/20 shadow-sm">
        
        {/* Column 1: Vector Search */}
        <section className="bg-surface-container-low p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/20 flex flex-col hover:bg-surface-container-highest transition-colors">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Vector Ops</h2>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-medium">Standard semantic similarity using HNSW indexing and cosine distance metrics.</p>
          </div>
          <div className="space-y-8 mb-12 flex-grow">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Latency</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">12ms</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[15%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Token Cost</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">Low</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[30%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Precision</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">84%</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[84%]"></div></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 border-l-2 border-primary">
            <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest block mb-4">Synthesis Output</span>
            <blockquote className="italic text-on-surface leading-relaxed text-sm">
              "High throughput with significant semantic overlap, yet struggles with precise keyword matching in technical manuals."
            </blockquote>
          </div>
        </section>

        {/* Column 2: Page Architecture */}
        <section className="bg-surface-container p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/20 flex flex-col hover:bg-surface-container-highest transition-colors shadow-inner">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">article</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Page Flow</h2>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-medium">Document-level context windows utilizing sliding-scale chunking and metadata filtering.</p>
          </div>
          <div className="space-y-8 mb-12 flex-grow">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Latency</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">48ms</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[45%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Token Cost</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">Medium</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[60%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Precision</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">91%</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[91%]"></div></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 border-l-2 border-primary">
            <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest block mb-4">Synthesis Output</span>
            <blockquote className="italic text-on-surface leading-relaxed text-sm">
              "Superior context retention. Ideal for long-form synthesis where document structure dictates relevant meaning."
            </blockquote>
          </div>
        </section>

        {/* Column 3: Graph RAG */}
        <section className="bg-surface-container-high p-8 flex flex-col hover:bg-surface-container-highest transition-colors shadow-inner">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">account_tree</span>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Graph X-Ray</h2>
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-medium">Entity-relationship mapping with multi-hop reasoning and knowledge graph traversal.</p>
          </div>
          <div className="space-y-8 mb-12 flex-grow">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Latency</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">124ms</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[85%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Token Cost</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">High</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[95%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Precision</span>
                <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest">98%</span>
              </div>
              <div className="h-1 bg-surface-container-highest w-full"><div className="h-1 bg-primary w-[98%]"></div></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 border-l-2 border-primary">
            <span className="font-label text-[10px] font-black uppercase text-primary tracking-widest block mb-4">Synthesis Output</span>
            <blockquote className="italic text-on-surface leading-relaxed text-sm">
              "Absolute precision for complex queries. Eliminates hallucinations by grounding results in explicit entity links."
            </blockquote>
          </div>
        </section>
      </motion.div>

      {/* System Visualization */}
      <motion.div variants={item} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container p-8 flex flex-col justify-center items-center text-center">
          <span className="font-label text-[10px] font-black uppercase text-primary tracking-[0.3em] mb-4">Neural Infrastructure</span>
          <div className="w-full h-64 bg-surface-dim border-2 border-outline-variant/30 flex items-center justify-center font-headline text-xs text-on-surface-variant tracking-widest overflow-hidden relative">
            [ARCHITECTURAL RENDER]
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="bg-surface-dim p-8 flex flex-col justify-center border border-outline-variant/10 shadow-sm">
          <h3 className="font-headline text-3xl font-bold uppercase mb-4">Comparative Edge</h3>
          <p className="text-on-surface-variant text-sm leading-loose mb-6">
            While Vector Ops provides the speed required for consumer-facing chat, the Graph X-Ray architecture remains the gold standard for financial and legal auditing. RAGnRok allows for dynamic switching between these layers based on query complexity.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-6 py-3 font-label text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">Download Report</button>
            <button className="bg-surface-container-highest text-on-surface px-6 py-3 font-label text-[10px] font-black uppercase tracking-widest hover:bg-surface-container transition-colors">View API Docs</button>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}

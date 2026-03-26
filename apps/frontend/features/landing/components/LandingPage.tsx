"use client";

import { motion } from "framer-motion";

export function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <header className="relative py-24 px-8 max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-8 lg:col-span-7 z-10">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-widest mb-6">Neural Observability V2.0</span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface leading-[0.9] tracking-tighter mb-8">
            See the <br /><span className="text-primary">AI Think.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            RAGnRok provides unprecedented transparency into retrieval-augmented generation. Architectural precision meets real-time neural mapping for the modern system architect.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 font-bold flex items-center gap-3 hover:opacity-90 transition-opacity">
              Explore Infrastructure
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="border-2 border-outline-variant text-on-surface px-8 py-4 font-bold hover:bg-surface-container transition-colors">
              Documentation
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-5 relative mt-12 md:mt-0">
          <div className="bg-surface-container-high aspect-square w-full relative overflow-hidden flex items-center justify-center border-l-4 border-primary">
            <div className="grid grid-cols-6 grid-rows-6 gap-2 w-4/5 h-4/5">
              <div className="bg-primary col-span-2 row-span-4"></div>
              <div className="bg-secondary-container col-span-4 row-span-1"></div>
              <div className="bg-surface-dim col-span-2 row-span-3"></div>
              <div className="bg-outline-variant col-span-2 row-span-2"></div>
              <div className="bg-primary-fixed-dim col-span-2 row-span-2"></div>
              <div className="bg-on-surface col-span-4 row-span-1"></div>
            </div>
            <div className="absolute bottom-4 left-4 font-headline text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
              Structural_Decomposition_Matrix_v4
            </div>
          </div>
        </div>
      </header>

      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 mb-20">
            <div className="col-span-12 lg:col-start-4 lg:col-span-6">
              <h2 className="font-headline text-4xl font-bold text-on-surface mb-4 uppercase tracking-tight">The Trinity of Retrieval</h2>
              <div className="h-1 w-24 bg-primary mb-6"></div>
              <p className="text-on-surface-variant leading-relaxed">
                A unified engine processing three distinct dimensions of knowledge representation. We don't just search; we understand the architectural relationship between your data points.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-surface p-10 relative overflow-hidden border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">distance</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase">Vector Dimension</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Semantic proximity analysis using multi-dimensional embeddings. Quantize latent space and retrieve context with mathematical certainty.
              </p>
              <div className="flex items-center gap-2 font-label text-[10px] font-bold text-primary uppercase tracking-widest">
                <span>Latency: 42ms</span>
                <span className="h-1 w-1 bg-outline-variant rounded-full"></span>
                <span>Recall: 98.4%</span>
              </div>
            </div>
            <div className="group bg-surface-container-highest p-10 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="text-on-surface mb-6">
                <span className="material-symbols-outlined text-4xl">auto_stories</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase">Page Index</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Deterministic document parsing and structural indexing. Maintain the literal integrity of technical archives while enabling granular traversal.
              </p>
              <div className="flex items-center gap-2 font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                <span>Depth: 128 Layers</span>
                <span className="h-1 w-1 bg-outline-variant rounded-full"></span>
                <span>Index: Solid State</span>
              </div>
            </div>
            <div className="group bg-surface p-10 relative overflow-hidden border-b-4 border-primary shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">account_tree</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 uppercase">Neural Graph</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Entity relationship mapping. Discover hidden dependencies between disparate data silos through topological path-finding.
              </p>
              <div className="flex items-center gap-2 font-label text-[10px] font-bold text-primary uppercase tracking-widest">
                <span>Nodes: 4.2M</span>
                <span className="h-1 w-1 bg-outline-variant rounded-full"></span>
                <span>Edges: Dynamic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-16 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container h-80 flex flex-col justify-end p-6 border-l-2 border-outline-variant">
                <div className="h-1/2 w-full bg-secondary-container mb-2"></div>
                <div className="h-1/4 w-3/4 bg-primary mb-4"></div>
                <div className="font-headline text-xs font-bold uppercase tracking-widest">Query Entropy</div>
              </div>
              <div className="bg-surface-dim h-80 flex flex-col justify-start p-6 mt-12 border-r-2 border-primary">
                <div className="font-headline text-xs font-bold uppercase tracking-widest mb-4">Context Injection</div>
                <div className="flex gap-1 h-full items-end">
                  <div className="bg-primary w-4 h-24"></div>
                  <div className="bg-primary w-4 h-32"></div>
                  <div className="bg-primary w-4 h-16"></div>
                  <div className="bg-on-surface w-4 h-48"></div>
                  <div className="bg-primary w-4 h-12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-headline text-5xl font-bold text-on-surface mb-8 tracking-tighter">Neural Observability</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              Stop guessing what happens inside the retrieval black box. RAGnRok provides a high-fidelity 'X-Ray' of every query cycle. Monitor token usage, retrieval precision, and generation confidence in a single, architectural viewport.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-sm">check</span>
                </div>
                <div>
                  <span className="block font-bold uppercase font-label text-sm tracking-wide">Real-time Telemetry</span>
                  <span className="text-on-surface-variant text-sm">Sub-millisecond tracking of node traversals and vector lookups.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-sm">check</span>
                </div>
                <div>
                  <span className="block font-bold uppercase font-label text-sm tracking-wide">Hallucination Detection</span>
                  <span className="text-on-surface-variant text-sm">Automated source verification against the underlying knowledge graph.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 relative overflow-hidden bg-surface border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-headline text-6xl font-bold mb-8 tracking-tighter">Ready to Deploy?</h2>
          <p className="text-xl text-on-surface-variant mb-12">
            Join the network of architects building the next generation of reliable, observable AI systems.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-on-surface text-surface-container-lowest px-12 py-5 font-bold uppercase text-sm tracking-widest hover:opacity-90 transition-all">Start Free Project</button>
            <button className="bg-surface-container-high text-on-surface px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-surface-dim transition-all">Request Demo</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

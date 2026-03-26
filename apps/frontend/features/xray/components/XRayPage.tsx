"use client";

import { motion, type Variants } from "framer-motion";

export function XRayPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const pulse: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="flex w-full max-w-[1600px] mx-auto min-h-[calc(100vh-80px)]">
      {/* SideNavBar Specific to X-Ray Context */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex flex-col w-64 border-r border-outline-variant/20 pt-8 py-6 z-30 shrink-0"
      >
        <div className="px-6 mb-8">
          <h2 className="text-lg font-black text-primary font-headline">RAGnRok</h2>
          <p className="text-xs text-on-surface-variant/70 uppercase tracking-widest font-bold">V2.0.4-Stable</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container transition-all" href="/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body text-sm tracking-wide">Overview</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 bg-surface text-primary font-bold border-l-4 border-primary transition-all translate-x-1 shadow-sm" href="/x-ray">
            <span className="material-symbols-outlined">visibility</span>
            <span className="font-body text-sm tracking-wide">X-Ray</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <span className="material-symbols-outlined">description</span>
            <span className="font-body text-sm tracking-wide">Logs</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-body text-sm tracking-wide">Telemetry</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-container transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body text-sm tracking-wide">System</span>
          </a>
        </nav>
        <div className="px-6 pt-4">
          <button className="w-full bg-primary text-on-primary py-3 px-4 font-bold text-sm uppercase tracking-tighter hover:opacity-90 transition-opacity rounded-sm">
            Deploy Patch
          </button>
        </div>
      </motion.aside>

      {/* Main Content Canvas */}
      <motion.main 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 p-6 md:p-8 relative overflow-hidden w-full"
      >
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        
        {/* Header Section */}
        <motion.header variants={item} className="relative z-10 mb-12">
          <div className="flex flex-wrap items-baseline gap-4 mb-2">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tighter uppercase">X-Ray Visualizer</h1>
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container font-label text-xs font-bold rounded-full shadow-sm">LIVE_SESSION: 0XA92B</span>
          </div>
          <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed mt-2">
            Deconstructing RAG neural architecture. Real-time monitoring of vector space embeddings, document hierarchy traversal, and entity relationship extraction.
          </p>
        </motion.header>

        {/* Diagnostic Multi-Pane Grid */}
        <div className="grid grid-cols-12 gap-6 relative z-10">
          
          {/* Vector Similarity Map (Large Pane) */}
          <motion.section variants={item} className="col-span-12 lg:col-span-8 bg-surface-container border-b-4 border-primary p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">scatter_plot</span>
                <h3 className="font-headline font-bold uppercase tracking-tight text-on-surface-variant">Vector Similarity Map</h3>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono bg-surface-container-highest px-2 py-1 rounded-sm">DIM: 1536</span>
                <span className="text-[10px] font-mono bg-surface-container-highest px-2 py-1 rounded-sm">METRIC: COSINE</span>
              </div>
            </div>
            
            <div className="h-80 md:h-96 w-full bg-surface-container-lowest relative flex items-center justify-center overflow-hidden border border-outline-variant/10">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#994528 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
              
              {/* Simulated Plot Points */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary/80 shadow-[0_0_15px_rgba(153,69,40,0.8)] animate-pulse rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-on-surface-variant/40 rounded-full"></div>
              <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-on-surface-variant/40 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-primary/20 border border-primary shadow-[0_0_20px_rgba(153,69,40,0.4)] animate-pulse rounded-full"></div>
              <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-on-surface-variant/40 rounded-full"></div>
              
              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line stroke="#994528" strokeDasharray="4" strokeWidth="1" x1="33%" x2="66%" y1="25%" y2="75%"></line>
                <line stroke="#994528" strokeWidth="0.5" x1="33%" x2="25%" y1="25%" y2="50%"></line>
                <circle cx="33%" cy="25%" fill="none" r="100" stroke="#994528" strokeDasharray="10" strokeWidth="0.5"></circle>
              </svg>
              
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-on-surface-variant uppercase space-y-1 bg-surface-container-lowest/80 p-2 rounded-sm backdrop-blur-sm">
                <div>x_axis: principal_component_1</div>
                <div>y_axis: principal_component_2</div>
              </div>
            </div>
          </motion.section>

          {/* Document Hierarchy (JSON-style Tree) */}
          <motion.section variants={item} className="col-span-12 lg:col-span-4 bg-surface-container p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">account_tree</span>
              <h3 className="font-headline font-bold uppercase tracking-tight text-on-surface-variant">Document Hierarchy</h3>
            </div>
            <div className="bg-surface-container-lowest p-4 font-mono text-sm overflow-y-auto h-[320px] md:h-96 border-l-2 border-primary/30 shadow-inner">
              <div className="text-tertiary">{"{"}</div>
              <div className="ml-4"><span className="text-on-surface-variant">"root":</span> <span className="text-tertiary">{"{"}</span></div>
              <div className="ml-8"><span className="text-on-surface-variant">"id":</span> <span className="text-primary">"doc_7712"</span>,</div>
              <div className="ml-8"><span className="text-on-surface-variant">"metadata":</span> <span className="text-tertiary">{"{"}</span></div>
              <div className="ml-12"><span className="text-on-surface-variant">"source":</span> <span className="text-primary">"internal_pdf"</span>,</div>
              <div className="ml-12"><span className="text-on-surface-variant">"chunks":</span> <span className="text-primary">14</span></div>
              <div className="ml-8 text-tertiary">{"},"}</div>
              <div className="ml-8 bg-primary/10 -mx-4 px-4 py-1 flex items-center">
                <span className="text-on-surface-variant">"active_chunk":</span> <span className="text-primary ml-2">0x4</span> 
                <span className="inline-block w-2 h-2 rounded-full bg-primary ml-2 shadow-[0_0_8px_rgba(153,69,40,0.8)] animate-pulse"></span>
              </div>
              <div className="ml-8"><span className="text-on-surface-variant">"content_ref":</span> <span className="text-primary">"base64_encoded"</span></div>
              <div className="ml-4 text-tertiary">{"}"}</div>
              <div className="text-tertiary">{"}"}</div>
            </div>
          </motion.section>

          {/* Graph Entity Extraction */}
          <motion.section variants={item} className="col-span-12 bg-surface-container p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">hub</span>
              <h3 className="font-headline font-bold uppercase tracking-tight text-on-surface-variant">Graph Entity Extraction</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Entity Nodes Area */}
              <div className="md:col-span-2 h-64 bg-surface-container-lowest border border-outline-variant/20 relative shadow-inner overflow-hidden">
                <svg className="w-full h-full absolute inset-0">
                  <circle cx="50%" cy="50%" fill="#994528" r="20"></circle>
                  <text className="font-mono text-[10px] fill-on-surface" dy="40" textAnchor="middle" x="50%" y="50%">CENTRAL_QUERY</text>
                  <circle cx="20%" cy="30%" fill="#dbc1b9" r="12"></circle>
                  <text className="font-mono text-[10px] fill-on-surface" dy="25" textAnchor="middle" x="20%" y="30%">ENTITY_A</text>
                  <circle cx="80%" cy="40%" fill="#dbc1b9" r="12"></circle>
                  <text className="font-mono text-[10px] fill-on-surface" dy="25" textAnchor="middle" x="80%" y="40%">ENTITY_B</text>
                  <circle cx="60%" cy="80%" fill="#dbc1b9" r="12"></circle>
                  <text className="font-mono text-[10px] fill-on-surface" dy="25" textAnchor="middle" x="60%" y="80%">ENTITY_C</text>
                  <line opacity="0.4" stroke="#994528" strokeWidth="1" x1="50%" x2="20%" y1="50%" y2="30%"></line>
                  <line opacity="0.4" stroke="#994528" strokeWidth="1" x1="50%" x2="80%" y1="50%" y2="40%"></line>
                  <line opacity="0.4" stroke="#994528" strokeWidth="1" x1="50%" x2="60%" y1="50%" y2="80%"></line>
                </svg>
              </div>
              
              {/* Extraction Details */}
              <div className="bg-surface-container-high p-4 flex flex-col justify-between border-t-2 md:border-t-0 md:border-l-2 border-primary/20">
                <div>
                  <h4 className="text-xs font-bold uppercase text-on-surface-variant mb-4 tracking-widest">Detected Entities</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-surface-container-lowest px-3 py-2 text-xs font-mono rounded-sm shadow-sm">
                      <span>SYSTEM_DELTA</span>
                      <span className="text-primary font-bold">98%</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container-lowest px-3 py-2 text-xs font-mono rounded-sm shadow-sm">
                      <span>LEGACY_MODULE</span>
                      <span className="text-primary font-bold">84%</span>
                    </div>
                    <div className="flex justify-between items-center bg-surface-container-lowest px-3 py-2 text-xs font-mono rounded-sm shadow-sm">
                      <span>USER_AUTH</span>
                      <span className="text-primary font-bold">72%</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 mt-4">
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold block mb-1 tracking-widest">Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tertiary rounded-full shadow-[0_0_5px_rgba(0,107,96,0.6)]"></div>
                    <span className="text-[10px] font-mono font-bold">NOMINAL EXTRACTION</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Monospaced Execution Logs (Bottom) */}
          <motion.section variants={item} className="col-span-12 bg-[#1c1b1b] text-stone-300 p-6 font-mono text-sm mt-8 border-l-4 border-primary rounded-sm shadow-lg">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <span className="material-symbols-outlined text-sm">terminal</span>
              <span className="text-xs uppercase font-bold tracking-widest">System Execution Logs</span>
            </div>
            <div className="space-y-1.5 text-xs opacity-90 h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-outline-variant scrollbar-track-transparent">
              <div><span className="text-stone-500">[2023-11-24 14:02:11]</span> <span className="text-tertiary">INFO:</span> Initializing embedding engine...</div>
              <div><span className="text-stone-500">[2023-11-24 14:02:12]</span> <span className="text-tertiary">INFO:</span> Connecting to vector store [MILVUS_PROD]</div>
              <div><span className="text-stone-500">[2023-11-24 14:02:13]</span> <span className="text-[#da7756]">WARN:</span> Latency spike detected in entity extraction (420ms)</div>
              <div><span className="text-stone-500">[2023-11-24 14:02:14]</span> <span className="text-tertiary">INFO:</span> Re-ranking top 100 retrieval results...</div>
              <div><span className="text-stone-500">[2023-11-24 14:02:15]</span> <span className="text-stone-100 font-bold">EXEC:</span> Generation started for prompt_id=0xA92B</div>
              <div className="animate-pulse"><span className="text-stone-500">[2023-11-24 14:02:16]</span> <span className="text-tertiary">INFO:</span> Streaming response tokens... <span className="inline-block w-1.5 h-3 bg-primary ml-1 align-middle"></span></div>
            </div>
          </motion.section>

        </div>
      </motion.main>
    </div>
  );
}

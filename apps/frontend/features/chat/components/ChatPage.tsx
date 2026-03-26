"use client";

import { motion, type Variants } from "framer-motion";

export function ChatPage() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const rightPanel: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex-1 flex flex-col md:flex-row p-4 md:p-8 gap-8 overflow-hidden relative z-10 w-full max-w-[1600px] mx-auto min-h-[calc(100vh-80px)]"
    >
      {/* LEFT CONTENT: Indexing Hub & Data */}
      <motion.div variants={item} className="flex-1 flex flex-col gap-8 overflow-y-auto pr-2 md:pr-4 custom-scrollbar">
        
        {/* Hero Section: Neural Indexing Hub */}
        <section className="bg-surface-container p-6 md:p-8 border-l-8 border-primary shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
            <div>
              <h3 className="font-headline font-bold text-2xl md:text-3xl text-on-surface tracking-tighter mb-1 uppercase">Neural Indexing Hub</h3>
              <p className="text-on-surface-variant font-body text-sm max-w-xl">Active ingestion pipeline processing legacy PDF dossiers and architectural schemas. Global latency currently within nominal thresholds.</p>
            </div>
            <div className="bg-surface-container-lowest p-4 flex flex-col items-center shadow-inner rounded-sm">
              <span className="text-[10px] font-bold font-label uppercase text-primary mb-1 tracking-widest">Index Health</span>
              <span className="text-2xl font-headline font-bold">99.2%</span>
            </div>
          </div>
          
          {/* Technical Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-highest p-4 rounded-sm">
              <label className="text-[10px] font-bold font-label uppercase text-on-surface-variant mb-2 block tracking-widest">VRAM Utilization</label>
              <div className="w-full h-4 bg-surface flex items-center p-0.5 shadow-inner">
                <div className="h-full bg-primary" style={{ width: "74%" }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] font-medium text-on-surface-variant">74% Capacity</span>
                <span className="text-[10px] font-medium text-on-surface-variant">32GB / 48GB</span>
              </div>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-sm">
              <label className="text-[10px] font-bold font-label uppercase text-on-surface-variant mb-2 block tracking-widest">System Latency</label>
              <div className="w-full h-4 bg-surface flex items-center p-0.5 shadow-inner">
                <div className="h-full bg-[#da7756]" style={{ width: "28%" }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] font-medium text-on-surface-variant">12ms Response</span>
                <span className="text-[10px] font-medium text-on-surface-variant">Threshold: 50ms</span>
              </div>
            </div>
            <div className="bg-surface-container-highest p-4 rounded-sm">
              <label className="text-[10px] font-bold font-label uppercase text-on-surface-variant mb-2 block tracking-widest">Queue Load</label>
              <div className="w-full h-4 bg-surface flex items-center p-0.5 shadow-inner">
                <div className="h-full bg-on-surface-variant" style={{ width: "45%" }}></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] font-medium text-on-surface-variant">1,204 Tasks</span>
                <span className="text-[10px] font-medium text-on-surface-variant">Optimal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Ledger List */}
        <section className="flex flex-col">
          <div className="flex justify-between items-end mb-4 px-2">
            <h4 className="font-headline font-bold text-lg text-on-surface uppercase tracking-tight">Recent Ingestion Ledger</h4>
            <span className="text-[10px] font-bold font-label uppercase text-on-surface-variant underline cursor-pointer hover:text-primary transition-colors">Export CSV</span>
          </div>
          <div className="bg-surface-container-lowest shadow-sm overflow-x-auto border border-outline-variant/10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface-container-highest text-[10px] font-bold font-label uppercase text-on-surface-variant border-b border-outline-variant/20">
                  <th className="px-4 py-3 tracking-widest">Timestamp</th>
                  <th className="px-4 py-3 tracking-widest">Source Identifier</th>
                  <th className="px-4 py-3 tracking-widest">Vector Nodes</th>
                  <th className="px-4 py-3 text-right tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body">
                <tr className="hover:bg-surface-container-low transition-colors border-b border-outline-variant/5">
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">14:22:09.11</td>
                  <td className="px-4 py-4 font-bold text-on-surface">STRUCT_DOC_v3.pdf</td>
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">12,402</td>
                  <td className="px-4 py-4 text-right">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider">Indexed</span>
                  </td>
                </tr>
                <tr className="bg-surface-container/30 hover:bg-surface-container-low transition-colors border-b border-outline-variant/5">
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">14:18:45.92</td>
                  <td className="px-4 py-4 font-bold text-on-surface">SCHEMATIC_ARC_09.png</td>
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">8,110</td>
                  <td className="px-4 py-4 text-right">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider">Indexed</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors border-b border-outline-variant/5">
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">14:12:11.04</td>
                  <td className="px-4 py-4 font-bold text-on-surface">LEGACY_ARCHIVE_FINAL</td>
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">54,001</td>
                  <td className="px-4 py-4 text-right">
                    <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider">Parsing</span>
                  </td>
                </tr>
                <tr className="bg-surface-container/30 hover:bg-surface-container-low transition-colors">
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">13:55:02.33</td>
                  <td className="px-4 py-4 font-bold text-on-surface">USER_SUBMISSION_X.doc</td>
                  <td className="px-4 py-4 text-on-surface-variant font-mono text-xs">1,299</td>
                  <td className="px-4 py-4 text-right">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-wider">Indexed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Status Indicators Block */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface-container p-6 flex flex-col justify-between h-40 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-primary">memory</span>
              <span className="text-[10px] font-bold font-label uppercase text-primary tracking-widest">Stable</span>
            </div>
            <div>
              <p className="text-[10px] font-bold font-label uppercase text-on-surface-variant tracking-widest">Compute Cluster</p>
              <h5 className="text-xl font-headline font-bold mt-1">NEURAL_GRID_01</h5>
            </div>
          </div>
          <div className="bg-surface-container-highest p-6 flex flex-col justify-between h-40 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-tertiary">database</span>
              <span className="text-[10px] font-bold font-label uppercase text-tertiary tracking-widest">Sync: OK</span>
            </div>
            <div>
              <p className="text-[10px] font-bold font-label uppercase text-on-surface-variant tracking-widest">Active Vectors</p>
              <h5 className="text-xl font-headline font-bold mt-1">4.2M Nodes</h5>
            </div>
          </div>
        </section>
      </motion.div>

      {/* RIGHT CONTENT: Integrated Chat Panel */}
      <motion.div variants={rightPanel} className="w-full md:w-[420px] flex flex-col bg-surface-container-lowest border border-outline-variant/20 shadow-lg relative z-20 shrink-0 h-[600px] md:h-auto overflow-hidden">
        
        {/* Chat Header */}
        <div className="p-6 bg-surface border-b border-outline-variant/20 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary shadow-[0_0_8px_rgba(153,69,40,0.6)] animate-pulse rounded-sm"></div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest">NEURAL_QUERY_OS</h4>
          </div>
          <button className="bg-surface-container-high p-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors rounded-sm">
            <span className="material-symbols-outlined text-sm">more_vert</span>
          </button>
        </div>
        
        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col custom-scrollbar bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container-lowest via-surface-container-lowest to-surface-container-low">
          
          {/* Bot Message */}
          <div className="flex flex-col items-start gap-2 max-w-[85%]">
            <div className="bg-surface-container p-4 text-xs font-body text-on-surface-variant border-l-2 border-primary shadow-sm">
              Connection established. Live inference active on 4 indexed documents. How can I assist with your data synthesis?
            </div>
            <span className="text-[8px] font-bold font-label uppercase opacity-50 ml-1 tracking-widest">System • 14:22</span>
          </div>
          
          {/* User Message */}
          <div className="flex flex-col items-end gap-2 max-w-[85%] self-end">
            <div className="bg-primary p-4 text-xs font-body text-on-primary shadow-sm rounded-sm">
              What are the structural stress tolerances mentioned in SCHEMATIC_ARC_09?
            </div>
            <span className="text-[8px] font-bold font-label uppercase opacity-50 mr-1 tracking-widest">Operator • 14:24</span>
          </div>
          
          {/* Bot Message */}
          <div className="flex flex-col items-start gap-2 max-w-[95%]">
            <div className="bg-surface-container p-4 text-xs font-body text-on-surface-variant border-l-2 border-primary leading-relaxed shadow-sm">
              <p className="mb-2 font-bold uppercase text-[10px] tracking-widest text-primary">Reference: SCHEMATIC_ARC_09 (Page 14)</p>
              According to the indexed vector data, the structural stress tolerances for the primary load-bearing members are rated at <span className="text-primary font-bold">45,000 PSI</span>. This assumes a reinforced concrete substrate with 2% basalt fiber integration as specified in the concurrent PDF dossiers.
            </div>
            <span className="text-[8px] font-bold font-label uppercase opacity-50 ml-1 tracking-widest">System • 14:24</span>
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="p-6 bg-surface border-t border-outline-variant/20 z-10 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
          <div className="flex gap-2 mb-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-surface-container text-[10px] font-bold font-label uppercase tracking-widest py-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors rounded-sm">
              <span className="material-symbols-outlined text-xs">upload_file</span> Document Upload
            </button>
            <button className="px-4 flex items-center justify-center bg-surface-container text-on-surface-variant hover:bg-secondary-container transition-colors rounded-sm">
              <span className="material-symbols-outlined text-xs">history</span>
            </button>
          </div>
          <div className="relative">
            <textarea 
              className="w-full bg-surface-container-highest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-sm font-body p-4 placeholder-on-surface-variant/50 resize-none rounded-sm transition-all" 
              placeholder="Query the neural index..." 
              rows={3}
            ></textarea>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity shadow-md rounded-sm">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-[9px] font-medium text-on-surface-variant/70 font-label tracking-widest">Tokens Remaining: 144,209</p>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-tertiary"></div>
              <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
              <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

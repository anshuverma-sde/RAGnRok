"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-surface-container-highest py-16 px-8 border-t border-outline-variant"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="text-2xl font-bold text-primary font-headline tracking-tight mb-6">RAGnRok</div>
          <p className="text-sm text-on-surface-variant max-w-xs">
            The observability layer for retrieval-augmented generation. Architected for precision. Built for scale.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-headline text-xs font-bold uppercase tracking-widest mb-6">Product</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><Link href="/" className="hover:text-primary transition-colors">Infrastructure</Link></li>
            <li><Link href="/x-ray" className="hover:text-primary transition-colors">Neural Mapping</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-headline text-xs font-bold uppercase tracking-widest mb-6">Resources</h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">API Reference</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">System Status</Link></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <h5 className="font-headline text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h5>
          <div className="flex gap-2 justify-end">
            <input className="bg-surface px-4 py-2 border-none focus:ring-1 focus:ring-primary text-sm w-full md:w-auto" placeholder="Email Address" type="email" />
            <button className="bg-primary text-on-primary px-4 py-2 font-bold uppercase text-[10px] tracking-widest">Join</button>
          </div>
          <div className="mt-8 flex gap-4 justify-end">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">code</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">© 2024 RAGnRok. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8">
          <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </motion.footer>
  );
}

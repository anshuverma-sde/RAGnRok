"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Landing", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "X-Ray", href: "/x-ray" },
    { name: "Comparison", href: "/compare" },
    { name: "Chat", href: "/chat" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-surface flex justify-between items-center w-full px-8 py-4 max-w-full sticky top-0 z-50 border-b border-outline-variant/10"
    >
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold text-primary uppercase font-headline tracking-tight">RAGnRok</Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors px-2 py-1 font-medium ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:block text-on-surface-variant font-medium px-4 py-2 hover:bg-surface-container transition-colors uppercase tracking-widest text-sm font-bold">System Status</button>
        <button className="bg-primary text-on-primary px-6 py-2 font-bold hover:opacity-90 transition-opacity uppercase tracking-widest text-sm rounded-sm">Launch App</button>
      </div>
    </motion.nav>
  );
}

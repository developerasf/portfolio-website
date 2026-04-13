"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Cloud, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Deployments", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5 py-4"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#354FE2] flex items-center justify-center font-bold text-white rounded-lg rotate-3">
              <Cloud className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white uppercase italic">
              Alamin<span className="text-[#354FE2]">.</span>Flow
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link uppercase tracking-widest text-xs"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              Consult Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/5"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block nav-link uppercase tracking-widest text-xs py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block"
            >
              Consult Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
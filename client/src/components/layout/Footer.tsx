"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/developerasf/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/alamin", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@alaminflow.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-12 mb-20">
          <div>
            <h4 className="text-white font-bold text-2xl mb-6 tracking-tighter italic">
              ALAMIN<span className="text-[#354FE2]">.</span>FLOW
            </h4>
            <p className="text-[#D9E0EF]/40 max-w-sm text-sm">
              Building reliable systems for the modern web. From core architecture to final deployment.
            </p>
          </div>
          <div className="flex gap-16 md:justify-end">
            <div>
              <p className="text-[#354FE2] text-xs font-bold uppercase tracking-widest mb-6">Social</p>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="https://github.com/developerasf/" className="nav-link">GitHub</a></li>
                <li><a href="https://linkedin.com/in/alamin" className="nav-link">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[#354FE2] text-xs font-bold uppercase tracking-widest mb-6">Contact</p>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="mailto:hello@alaminflow.com" className="nav-link">hello@alaminflow.com</a></li>
                <li><span className="text-[#D9E0EF]/30 uppercase mono-font">UTC +6</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D9E0EF]/20 font-bold">
            ALAMINFLOW_ENGINEERING_LOGS_{new Date().getFullYear()}
          </p>
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D9E0EF]/20 font-bold">
            SYSTEM_STABLE_VERSION_4.0
          </p>
        </div>
      </div>
    </footer>
  );
}
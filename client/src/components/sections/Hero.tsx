"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(53,79,226,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(41,20,106,0.3)_0%,transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/50 border border-border text-sm font-mono mb-6 uppercase tracking-widest"
            >
              {"// Hello, World"}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4 italic">
              I'm a{" "}
              <span className="text-cta">Full Stack</span>{" "}
              Engineer
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Passionate full stack engineer. Building scalable solutions with MERN Stack, Java, Python & C++. 
              Currently pursuing CSE at AIUB.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-cta-foreground rounded-2xl font-medium hover:bg-cta/90 transition-colors cursor-pointer border border-transparent"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-2xl font-medium hover:bg-primary/50 transition-colors cursor-pointer"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-heading font-bold text-cta">2+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">Years Learning</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-cta">15+</p>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-cta">5</p>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">Tech Stacks</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cta/20 to-primary/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/50 border border-border/50 rounded-xl">
                    <div className="w-12 h-12 bg-cta/20 rounded-lg flex items-center justify-center">
                      <span className="text-cta font-mono text-lg">{"</>"}</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Web Development</p>
                      <p className="text-muted-foreground text-sm">React, Node.js, Express</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/50 border border-border/50 rounded-xl">
                    <div className="w-12 h-12 bg-cta/20 rounded-lg flex items-center justify-center">
                      <span className="text-cta font-mono text-lg">⊞</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Database</p>
                      <p className="text-muted-foreground text-sm">MongoDB, MySQL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/50 border border-border/50 rounded-xl">
                    <div className="w-12 h-12 bg-cta/20 rounded-lg flex items-center justify-center">
                      <span className="text-cta font-mono text-lg">⬡</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold">Programming</p>
                      <p className="text-muted-foreground text-sm">Python, Java, C++</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/50 rounded-2xl border border-border backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-cta text-2xl">⚡</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/50 rounded-2xl border border-border backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-muted-foreground text-2xl">💻</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
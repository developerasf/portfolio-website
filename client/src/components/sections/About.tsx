"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CSE Student",
    description: "Studying Computer Science & Engineering at AIUB",
  },
  {
    icon: Target,
    title: "Future SWE",
    description: "Aspiring to become a Software Engineer",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Love breaking down complex problems into elegant solutions",
  },
  {
    icon: User,
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 italic">
            About <span className="text-cta">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer on a journey to build impactful software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full stack engineer Currently studying CSE at AIUB. 
                My tech stack includes MERN (MongoDB, Express, React, Node.js), 
                Java, Python, and C++.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm working towards becoming a skilled Software Engineer, where I can combine my 
                programming skills with my passion for building scalable and innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 bg-primary/30 border border-border/50 rounded-xl hover:border-cta/30 transition-colors cursor-pointer"
              >
                <div className="p-3 bg-primary/50 border border-border/50 rounded-lg">
                  <item.icon className="w-5 h-5 text-cta" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
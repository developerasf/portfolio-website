"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: ["Node.js", "Express", "Python", "Java", "C++", "REST APIs"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL", "Database Design"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Tools & Others",
    icon: Brain,
    skills: ["Git", "Docker", "AWS", "Linux", "Vercel", "ML Basics"],
    color: "from-orange-500 to-red-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-cta/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Tech <span className="text-cta">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-cta/30 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-heading font-semibold mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-cta/10 transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Always learning and exploring new technologies →
            <span className="text-cta font-mono ml-2">Currently: MLOps, Cloud Architecture</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
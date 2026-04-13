"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    category: "Full Stack Web",
    title: "Portfolio",
    description: "Personal portfolio showcasing projects and skills. Built with MERN stack, Next.js, and TypeScript with animations and modern design.",
    tech: ["MERN Stack", "Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/developerasf/portfolio-website",
    demo: "",
  },
  {
    category: "Full Stack Platform",
    title: "E-Learning Platform",
    description: "Full-featured e-learning platform with video streaming, course management, progress tracking, and interactive quizzes.",
    tech: ["MERN Stack", "React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "",
  },
  {
    category: "Web Application",
    title: "Movie Site",
    description: "Movie discovery application with search, filtering, favorites, and detailed movie information using TMDB API.",
    tech: ["MERN Stack", "React", "API Integration"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    category: "Desktop Application",
    title: "Banking Management System",
    description: "Desktop banking application with account management, transactions, loan processing, and report generation.",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 mb-40">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Enterprise Deployments</h2>
        <div className="section-accent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-indigo rounded-[2rem] p-10 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
              <span className="text-4xl font-black text-[#354FE2]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#354FE2] mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold text-white group-hover:text-[#354FE2] transition-colors">
                {project.title}
              </h3>
            </div>
            
            <p className="text-[#D9E0EF]/50 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full border border-white/5 text-[10px] font-bold text-[#D9E0EF]"
                >
                  {tech.toUpperCase()}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 mt-6 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/developerasf/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest border border-white/10 hover:border-[#354FE2]/50 transition-all"
        >
          View More
          <ChevronRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
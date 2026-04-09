"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, Express, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full Stack",
  },
  {
    title: "Student Management System",
    description: "Desktop application for managing student records, grades, and attendance. Built with Java and MySQL for data persistence.",
    tech: ["Java", "MySQL", "JavaFX"],
    github: "https://github.com",
    demo: "",
    category: "Desktop",
  },
  {
    title: "ML Pipeline Automation",
    description: "Automated ML model training and deployment pipeline using Python, Docker, and CI/CD. Handles data preprocessing, model training, and deployment.",
    tech: ["Python", "Docker", "MLflow", "AWS"],
    github: "https://github.com",
    demo: "",
    category: "MLOps",
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with rooms, file sharing, and real-time messaging. Built with React and Socket.io.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full Stack",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills. Built with Next.js, TypeScript, and Tailwind CSS with animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web",
  },
  {
    title: "API Gateway Service",
    description: "RESTful API gateway with rate limiting, authentication, and request routing. Built with Node.js and Express.",
    tech: ["Node.js", "Express", "Redis", "JWT"],
    github: "https://github.com",
    demo: "",
    category: "Backend",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Featured <span className="text-cta">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on to solve real problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-300 hover:shadow-lg hover:shadow-cta/5 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-cta/10 text-cta text-xs font-mono rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-cta transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-cta/10 hover:text-cta hover:border-cta/50 transition-all cursor-pointer"
          >
            View All Projects
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, GraduationCap } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(53,79,226,0.1)_0%,transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 italic">
            Get In <span className="text-cta">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-primary/30 border border-border/50 rounded-xl">
                <div className="p-3 bg-primary/50 border border-border/50 rounded-lg">
                  <Mail className="w-5 h-5 text-cta" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold uppercase tracking-widest text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">alamin@email.com</p>
                  <a href="mailto:alamin@email.com" className="text-cta text-sm hover:underline">
                    Send email →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary/30 border border-border/50 rounded-xl">
                <div className="p-3 bg-primary/50 border border-border/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-cta" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold uppercase tracking-widest text-sm">Location</h4>
                  <p className="text-muted-foreground text-sm">Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary/30 border border-border/50 rounded-xl">
                <div className="p-3 bg-primary/50 border border-border/50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-cta" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold uppercase tracking-widest text-sm">University</h4>
                  <p className="text-muted-foreground text-sm">AIUB</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card/80 backdrop-blur-sm border border-border rounded-2xl">
              <h4 className="font-heading font-semibold mb-2 uppercase tracking-widest text-sm">Open to opportunities</h4>
              <p className="text-muted-foreground text-sm mb-4">
                I'm currently looking for internship opportunities and collaborative projects. 
                If you're building something exciting, I'd love to hear about it!
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-primary/50 border border-border/50 text-cta text-sm rounded-lg">Internship</span>
                <span className="px-3 py-1.5 bg-primary/50 border border-border/50 text-muted-foreground text-sm rounded-lg">Freelance</span>
                <span className="px-3 py-1.5 bg-primary/50 border border-border/50 text-muted-foreground text-sm rounded-lg">Collaborate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cta text-cta-foreground rounded-2xl font-medium hover:bg-cta/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border border-transparent"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
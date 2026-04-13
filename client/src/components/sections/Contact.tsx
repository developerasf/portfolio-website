"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10">
            <h2 className="text-5xl font-bold mb-6 italic">
              Let&apos;s Connect<span className="text-[#354FE2]">.</span>
            </h2>
            <div className="section-accent mb-8" />
            <p className="text-[#D9E0EF]/60 leading-relaxed max-w-md">
              Looking to build secure, scalable applications? I&apos;m currently accepting 
              new projects and collaborative engagements.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-[#354FE2]/10 flex items-center justify-center text-[#354FE2] group-hover:bg-[#354FE2] group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#354FE2] font-bold">Inquiry Protocol</p>
                <p className="text-white font-medium">hello@alaminflow.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-[#354FE2]/10 flex items-center justify-center text-[#354FE2] group-hover:bg-[#354FE2] group-hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#354FE2] font-bold">Location</p>
                <p className="text-white font-medium">Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-indigo rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#354FE2]/10 blur-3xl rounded-full" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D9E0EF]/40 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 rounded-xl text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D9E0EF]/40 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  required
                  className="w-full px-6 py-4 rounded-xl text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D9E0EF]/40 ml-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry"
                required
                className="w-full px-6 py-4 rounded-xl text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D9E0EF]/40 ml-1">
                Message Detail
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="Briefly describe your requirements..."
                required
                className="w-full px-6 py-4 rounded-xl text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Initialize Connection"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
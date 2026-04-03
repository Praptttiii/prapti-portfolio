import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

const roles = ["Ruby on Rails Developer", "Backend Engineer","Frontend Engineer", "API Architect"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -80, 50, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]"
        />
      </div>

      <ParticlesBackground />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm tracking-widest mb-6"
        >
          {"// welcome to my portfolio"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="gradient-text glow-text">Prapti Patel</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-3xl text-muted-foreground font-light h-10"
        >
          <span>{text}</span>
          <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse-glow align-middle" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg glow-border text-foreground font-semibold hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

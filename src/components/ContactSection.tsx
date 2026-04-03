import { motion, useInView } from "framer-motion";
import { Briefcase, FolderGit2, Mail, Send } from "lucide-react";
import { useRef, useState } from "react";

const socials = [
  { icon: FolderGit2, label: "GitHub", href: "https://github.com/Praptttiii" },
  {
    icon: Briefcase,
    label: "LinkedIn",
    href: "https://linkedin.com/in/prapti-patel12",
  },
  { icon: Mail, label: "Email", href: "mailto:praptipatel12unjha@gmail.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            {"// contact"}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's <span className="gradient-text">connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass glow-border rounded-2xl p-8 space-y-5"
          >
            {["Name", "Email"].map((field) => (
              <div key={field}>
                <label className="text-sm text-muted-foreground mb-1 block">
                  {field}
                </label>
                <input
                  type={field === "Email" ? "email" : "text"}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={`Your ${field.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {sent ? (
                "Message Sent! ✓"
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex gap-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="p-4 glass glow-border rounded-xl text-muted-foreground hover:text-primary transition-colors"
                >
                  <s.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion, useInView } from "framer-motion";
import { Activity, FolderGit2, GitFork, Star } from "lucide-react";
import { useRef } from "react";

const GitHubSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// github"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Open <span className="gradient-text">source</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Activity, label: "Contributions", value: "200+" },
            { icon: Star, label: "Stars Earned", value: "15+" },
            { icon: GitFork, label: "Repositories", value: "20+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass glow-border rounded-2xl p-6 text-center hover:bg-primary/5 transition-colors"
            >
              <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="glass glow-border rounded-2xl p-8 text-center"
        >
          <img
            src="https://ghchart.rshah.org/38bdf8/Praptttiii"
            alt="GitHub contribution graph"
            className="w-full max-w-4xl mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <a
            href="https://github.com/Praptttiii"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <FolderGit2 size={18} /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;

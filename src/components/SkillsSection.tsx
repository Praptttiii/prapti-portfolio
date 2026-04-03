import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Backend",
    skills: [
      { name: "Ruby", level: 90 },
      { name: "Rails", level: 92 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "Devise / JWT", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "TypeScript", level: 72 },
      { name: "JavaScript", level: 78 },
      { name: "HTML/CSS", level: 85 },
      { name: "Bootstrap", level: 78 },
      { name: "ERB / HAML", level: 82 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "AWS S3", level: 80 },
      { name: "GitHub", level: 88 },
      { name: "RSpec", level: 85 },
      { name: "Active Storage", level: 82 },
      { name: "Heroku", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full gradient-primary"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// skills"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.2, duration: 0.6 }}
              className="glass glow-border rounded-2xl p-6 space-y-5 hover:bg-primary/5 transition-colors"
            >
              <h3 className="text-lg font-bold gradient-text">{cat.title}</h3>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.2 + si * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

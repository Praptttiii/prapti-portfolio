import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Layers, Zap } from "lucide-react";

const Counter = ({ target, label }: { target: number; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text">{count}+</div>
      <div className="text-muted-foreground text-sm mt-1">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// about me"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Crafting <span className="gradient-text">robust backends</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a passionate Ruby on Rails developer who loves building secure, scalable web applications.
              From authentication systems with Devise & JWT to role-based admin panels, I craft clean
              architecture that stands the test of time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience spans API development, Active Storage with AWS S3 integration, dashboard analytics,
              and multilingual applications supporting English and Japanese.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <Counter target={10} label="Projects" />
              <Counter target={8} label="Technologies" />
              <Counter target={2} label="Languages" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            {[
              { icon: Code2, title: "Clean Architecture", desc: "RSpec-tested, maintainable code following best practices" },
              { icon: Layers, title: "Full-Stack Solutions", desc: "From database design to API endpoints to frontend integration" },
              { icon: Zap, title: "Performance First", desc: "Optimized queries, caching strategies, and scalable patterns" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="glass glow-border rounded-xl p-5 flex gap-4 items-start hover:bg-primary/5 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

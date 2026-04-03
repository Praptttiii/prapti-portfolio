import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "2024 — Present",
    title: "Ruby on Rails Developer",
    company: "Jesvid Technologies",
    desc: "Building production-grade web applications with authentication (Devise, JWT, OTP), role-based access control, API development, Active Storage & AWS S3 integration, and dashboard analytics. Working on multilingual applications (English + Japanese).",
  },
  {
    period: "2024 (6 months)",
    title: "Ruby on Rails Intern",
    company: "Jesvid Technologies",
    desc: "Trained in Ruby on Rails ecosystem — built CRUD applications, learned Active Storage, S3 integration, RSpec testing, and clean MVC architecture patterns.",
  },
  {
    period: "2023 — 2024",
    title: "Backend Development Training",
    company: "Self-Learning & Coursework",
    desc: "Deep dive into Rails ecosystem — Active Storage, AWS S3, RSpec testing, RESTful API design, and clean architecture patterns. Built multiple full-stack projects.",
  },
  {
    period: "2022 — 2023",
    title: "Web Development Foundations",
    company: "Self-Learning",
    desc: "Mastered HTML, CSS, JavaScript, Ruby, React, and TypeScript. Built foundational projects and learned MVC architecture and frontend frameworks.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// journey"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            My <span className="gradient-text">experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.25, duration: 0.7 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-border z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="text-primary font-mono text-sm">{item.period}</span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-accent text-sm font-medium mb-2">{item.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

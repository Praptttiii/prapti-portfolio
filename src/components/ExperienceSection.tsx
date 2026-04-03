import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "Jul-2025 — Present",
    title: "Ruby on Rails Developer",
    company: "Thinkbiz Technology Pvt Ltd",
    desc: "Working full-time on-site in Ahmedabad as a Ruby on Rails Developer, developing and enhancing scalable web applications.",
  },
  {
    period: "Jan-2025 — Jun-2025",
    title: "Ruby on Rails Developer Intern",
    company: "Thinkbiz Technology Pvt Ltd",
    desc: "Completed a full-time internship focused on scalable web applications, RESTful APIs with Ruby on Rails, database design with PostgreSQL and MySQL, authentication with Devise, role management, access control, RSpec testing, Git-based collaboration, code reviews, and Agile sprint participation.",
  },
  {
    period: "May 2023 — June 2023",
    title: "Jr Software Engineer",
    company: "ELLKAY",
    desc: "Passionate Junior Software Engineer with hands-on experience in building web applications using modern technologies. Skilled in backend development, API design, and database management, with a strong focus on writing clean, efficient, and scalable code.",
  },
  {
    period: "May 2023 — June 2023",
    title: "Android Developer",
    company: "Oasis Infobyte · Internship",
    desc: "Worked as an Android Developer Intern, building and improving mobile applications using modern development practices. Gained hands-on experience in coding, debugging, and implementing user-friendly features while collaborating in a team environment."
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

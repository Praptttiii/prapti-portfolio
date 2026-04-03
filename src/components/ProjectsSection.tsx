import { motion, useInView } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { useRef } from "react";
const projects = [
  {
    title: "Blog Application",
    desc: "Full-featured blog platform with CRUD operations, comments, user authentication, and rich text editing. Built with clean MVC architecture.",
    tags: ["Ruby on Rails", "PostgreSQL", "Devise", "Bootstrap"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Role-Based Admin System",
    desc: "Multi-tier admin panel supporting Admin, Sub Admin, and Super Admin roles with granular permissions and dashboard analytics.",
    tags: ["Rails", "Pundit", "JWT", "Charts"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Product Management System",
    desc: "Complete product catalog with listing, filtering, search, and inventory management. RESTful API with comprehensive documentation.",
    tags: ["Rails API", "Active Storage", "RSpec", "JSON:API"],
    color: "from-primary/20 to-glow/20",
  },
  {
    title: "Image Upload & S3 Integration",
    desc: "Robust file management system with Active Storage and AWS S3. Includes image processing, validations, and optimized delivery.",
    tags: ["AWS S3", "Active Storage", "ImageMagick", "Rails"],
    color: "from-glow/20 to-accent/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="group relative glass glow-border rounded-2xl overflow-hidden"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative p-8 flex flex-col h-full min-h-[320px]">
        <div className="flex justify-between items-start mb-4">
          <span className="text-primary font-mono text-xs tracking-wider">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Praptttiii"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FolderGit2 size={16} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest mb-2">{"// projects"}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/Praptttiii"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass glow-border text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            <FolderGit2 size={20} />
            Show More Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

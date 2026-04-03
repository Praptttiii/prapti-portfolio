import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="text-xl font-bold gradient-text">
          PP<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border/30"
          >
            {links.map((l, i) => (
              <motion.button
                key={l}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l)}
                className="block w-full text-left px-6 py-3 text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

import { ExternalLink, Github, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "AI Voice Chat Assistant",
    description:
      "An AI-powered voice assistant that allows users to interact through speech, ask questions, and receive intelligent responses in real time.",
    tech: ["Node.js", "WebSockets", "JavaScript/TypeScript", "AI APIs"],
    links: {
      github: "#",
      linkedin: "#",
      portfolio: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">✦</span>
          <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">Projects</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
          Featured
          <br />
          <span className="font-display italic text-gradient">Projects</span>
        </h2>
      </ScrollReveal>

      <motion.div
        className="mt-12 flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={itemVariants}>
            <motion.div 
              className="rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-primary/50 hover:glow-md transition-all duration-300 group"
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    {p.title}
                  </motion.h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
                    {p.description}
                  </p>
                </div>
                <motion.div 
                  className="hidden md:block ml-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-2xl">🎙️</span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {p.tech.map((t) => (
                  <motion.span 
                    key={t} 
                    className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                <motion.a 
                  href={p.links.github} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ x: 4 }}
                >
                  <Github className="size-4" /> GitHub
                </motion.a>
                <motion.a 
                  href={p.links.linkedin} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ x: 4 }}
                >
                  <Linkedin className="size-4" /> LinkedIn
                </motion.a>
                <motion.a 
                  href={p.links.portfolio} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ x: 4 }}
                >
                  <Globe className="size-4" /> Portfolio
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;

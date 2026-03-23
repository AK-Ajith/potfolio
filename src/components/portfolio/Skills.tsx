import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "C", "C++"] },
  { title: "Frontend", items: ["Angular", "AngularJS", "Ionic", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { title: "Database", items: ["PostgreSQL", "MySQL"] },
  { title: "Tools & Concepts", items: ["JWT", "WebSockets", "Sequelize ORM", "Git"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Skills = () => (
  <section id="skills" className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">✦</span>
          <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">My Skills</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
          Let's Explore My
          <br />
          <span className="font-display italic text-gradient">Skills & Experience</span>
        </h2>
      </ScrollReveal>

      <motion.div
        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {categories.map((cat) => (
          <motion.div key={cat.title} variants={itemVariants}>
            <motion.div 
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:glow-md transition-all duration-300 h-full cursor-pointer"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    className="inline-block rounded-full bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;

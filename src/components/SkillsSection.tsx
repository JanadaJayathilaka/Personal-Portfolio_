import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills, type Skill } from "@/data/portfolio-data";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
] as const;

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    className="glass-card glow-border rounded-xl p-6 flex flex-col items-center gap-3 group cursor-pointer"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    whileHover={{
      y: -8,
      boxShadow: `0 0 30px ${skill.color}40`,
    }}
  >
    <motion.div
      className="w-14 h-14 rounded-lg flex items-center justify-center"
      style={{ background: `${skill.color}15` }}
      whileHover={{ rotate: [0, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <img src={skill.icon} alt={skill.name} className="w-9 h-9" />
    </motion.div>
    <p className="font-heading text-sm font-semibold text-foreground">{skill.name}</p>
  </motion.div>
);

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            What I Work With
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all ${
                activeCategory === cat.key
                  ? "text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
              style={
                activeCategory === cat.key
                  ? { background: "var(--gradient-primary)" }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

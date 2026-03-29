import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Coffee } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const highlights = [
  { icon: Code2, label: "Clean Code", color: "hsl(330, 85%, 60%)" },
  { icon: Palette, label: "UI/UX Design", color: "hsl(260, 70%, 55%)" },
  { icon: Rocket, label: "Performance", color: "hsl(180, 70%, 50%)" },
  { icon: Coffee, label: "Problem Solver", color: "hsl(45, 90%, 55%)" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body leading-relaxed text-lg mb-6">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full text-sm font-body glass-card text-foreground">
                📍 {personalInfo.location}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-body glass-card text-foreground">
                📧 {personalInfo.email}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card glow-border rounded-xl p-6 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <item.icon
                  size={32}
                  className="mx-auto mb-3"
                  style={{ color: item.color }}
                />
                <p className="font-heading text-sm font-semibold text-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

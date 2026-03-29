import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio-data";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    className="glass-card glow-border rounded-2xl overflow-hidden group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, ${project.color}80, transparent)`,
        }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full flex items-center justify-center text-primary-foreground"
            style={{ background: project.color }}
            whileHover={{ scale: 1.1 }}
          >
            <ExternalLink size={18} />
          </motion.a>
        )}
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={18} />
          </motion.a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-body"
            style={{
              background: `${project.color}15`,
              color: project.color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            My Recent Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

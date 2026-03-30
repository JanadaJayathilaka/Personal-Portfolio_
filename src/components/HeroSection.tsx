import { motion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import profileImg from "@/assets/profile-photo.jpg";
import { personalInfo } from "@/data/portfolio-data";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden section-padding"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full opacity-20 blur-[60px] sm:blur-[80px] md:blur-[100px]"
          style={{ background: "hsl(330 85% 60%)", top: "10%", left: "-10%" }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full opacity-15 blur-[50px] sm:blur-[70px] md:blur-[80px]"
          style={{
            background: "hsl(260 70% 55%)",
            bottom: "10%",
            right: "-5%",
          }}
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[140px] h-[140px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full opacity-10 blur-[40px] sm:blur-[50px] md:blur-[60px]"
          style={{ background: "hsl(180 70% 50%)", top: "50%", left: "50%" }}
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.p
            className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-body mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {personalInfo.title}
          </motion.p>
          <motion.p
            className="text-muted-foreground font-body mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-heading font-semibold text-sm sm:text-base text-primary-foreground transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-heading font-semibold text-sm sm:text-base text-primary-foreground transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="/Janada%20Jayathilaka.pdf"
              download="Janada_Jayathilaka.pdf"
              aria-label="Download CV"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-heading font-semibold text-sm sm:text-base border border-border text-foreground hover:bg-muted transition-all cursor-pointer flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          {/* <motion.div
            className="flex items-center gap-4 mt-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { icon: Github, url: personalInfo.socialLinks.github },
              { icon: Linkedin, url: personalInfo.socialLinks.linkedin },
            ].map(({ icon: Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <motion.div
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-96 md:h-96 rounded-full overflow-hidden relative z-10"
              style={{ boxShadow: "var(--glow-primary)" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
              />
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            {/* Decorative ring */}
            <motion.div
              className="absolute inset-[-6px] sm:inset-[-8px] rounded-full border-2 border-primary/20 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                borderStyle: "dashed",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;

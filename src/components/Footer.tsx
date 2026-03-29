import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <motion.p
        className="text-muted-foreground font-body text-sm flex items-center gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} {personalInfo.name}. Built with React.js
      </motion.p>
      <motion.a
        href="#home"
        className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
        whileHover={{ y: -2 }}
      >
        Back to top ↑
      </motion.a>
    </div>
  </footer>
);

export default Footer;

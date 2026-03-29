export const personalInfo = {
  name: "Janada Jayathilaka",
  title: "Full Stack Developer | AI Enthusiast",
  tagline: "I build beautiful, performant web experiences",
  email: "lakvindujayathilaka@gmail.com",
  phone: "+94774718737",
  location: "Colombo, Sri Lanka",
  bio: "I'm a passionate full-stack developer with 1+ years of experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies and contributing to open source.",
  socialLinks: {
    github: "https://github.com/JanadaJayathilaka",
    linkedin: "https://www.linkedin.com/in/janada-jayathilaka/",
    // twitter: "https://twitter.com/yourusername",
  },
};

// EmailJS Configuration - Replace with your own credentials
export const emailjsConfig = {
  serviceId: "service_txsbemp",
  templateId: "template_n4f07th",
  publicKey: "5VMPGKXXWyMyw29a6",
};

export interface Skill {
  name: string;
  icon: string; // URL to SVG logo
  color: string; // HSL color for glow effect
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "hsl(197, 71%, 53%)",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "hsl(211, 60%, 48%)",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "hsl(53, 93%, 54%)",
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "hsl(12, 77%, 52%)",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "hsl(228, 77%, 52%)",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "hsl(198, 93%, 60%)",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "hsl(0, 0%, 80%)",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "hsl(120, 44%, 50%)",
    category: "backend",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "hsl(207, 51%, 44%)",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "hsl(120, 61%, 34%)",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "hsl(210, 51%, 44%)",
    category: "backend",
  },

  // Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "hsl(10, 75%, 48%)",
    category: "tools",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "hsl(207, 82%, 54%)",
    category: "tools",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "hsl(340, 73%, 56%)",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "hsl(207, 80%, 52%)",
    category: "tools",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string; // URL to project screenshot
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string; // accent color for the card
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment processing, and an admin dashboard built with React and Node.js.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "hsl(330, 85%, 60%)",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop, real-time updates, and team workspaces powered by WebSockets.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "hsl(260, 70%, 55%)",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by OpenAI GPT with context memory, multi-language support, and custom training capabilities.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "React", "OpenAI", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "hsl(180, 70%, 50%)",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for tracking social media performance across platforms with real-time charts and automated reporting.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "Node.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    color: "hsl(45, 90%, 55%)",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

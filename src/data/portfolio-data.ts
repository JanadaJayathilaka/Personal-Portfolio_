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
  // Next.js removed per request

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
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "hsl(205, 60%, 35%)",
    category: "backend",
  },
  // PostgreSQL removed per request
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "hsl(24, 68%, 46%)",
    category: "backend",
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "hsl(120, 40%, 30%)",
    category: "backend",
  },

  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    color: "hsl(0, 0%, 20%)",
    category: "tools",
  },
  {
    name: "LangChain",
    icon: "https://cdn.simpleicons.org/langchain",
    color: "hsl(260, 80%, 60%)",
    category: "tools",
  },
  {
    name: "LangGraph",
    icon: "https://cdn.simpleicons.org/langgraph",
    color: "hsl(200, 80%, 55%)",
    category: "tools",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "hsl(0, 0%, 6%)",
    category: "tools",
  },
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    color: "hsl(153, 60%, 35%)",
    category: "tools",
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
      "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/JanadaJayathilaka/E-Commerce-Watch-shop",
    color: "hsl(330, 85%, 60%)",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop, real-time updates, and team workspaces powered by WebSockets.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js"],
    liveUrl: "https://task-app-mern-frontend.onrender.com",
    githubUrl: "https://github.com/JanadaJayathilaka/Task-app-MERN",
    color: "hsl(260, 70%, 55%)",
  },
  {
    title: "AI MulitAgent Travel Workflow",
    description:
      "A backend multi-agent travel planning system using LangChain and LangGraph, implementing specialized agents ",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "LangGraph", "OpenAI", "LangChain"],
    // liveUrl: "https://example.com",
    githubUrl:
      "https://github.com/JanadaJayathilaka/Multi-Agent-Travel-Planner",
    color: "hsl(180, 70%, 50%)",
  },
  {
    title: "SpringBoot CI/CD Implementation",
    description:
      "Implemented a CI/CD pipeline for a Spring Boot application using Jenkins, Docker, and Nginx, enabling automated testing, containerization, and deployment to production.",
    image: "cicd.png",

    tags: ["Spring Boot", "Jenkins", "Docker", "Nginx", "AWS", "SonarQube"],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/JanadaJayathilaka/Springboot-CI-CD",
    color: "hsl(45, 90%, 55%)",
  },
  {
    title: "AI chatbot",
    description:
      "A conversational AI chatbot built with natural language processing capabilities, designed to assist users with common queries and provide personalized responses.",
    image: "ai-chatbot.jpg",

    tags: ["python", "FastAPI"],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/JanadaJayathilaka/AI-chatbot_fullstack",
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

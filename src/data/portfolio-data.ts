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
    title: "Text to Speech AI SaaS",
    description:
      "ElevenLabs Text-to-Speech AI SaaS built with React, Node.js, and MongoDB, offering natural voice generation and customization options.",
    image: "./image.png",
    tags: ["NextJS", "Clerk", "PrismaDB", "ElevenLabs API", "Stripe"],
    liveUrl: "https://text-to-speech-nextjs-seven.vercel.app/",
    githubUrl: "https://github.com/JanadaJayathilaka/Text-to-speech-nextjs",
    color: "hsl(180, 70%, 50%)",
  },
  {
    title: "AI MultiAgent Travel Workflow",
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
    title: "Fitness Recommendation - Microservices Architecture",
    description:
      "A fitness recommendation system built with a microservices architecture using Spring Boot for the backend, React for the frontend.",
    image:
      "data:image/jpeg;base64,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",
    tags: ["React.js", "Spring Boot", "Microservices", "Keycloak", "RabbitMQ"],

    githubUrl:
      "https://github.com/JanadaJayathilaka/FItness-Recommendation-Microservices",
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
  {
    title: "RAG QA System",
    description:
      "A Retrieval-Augmented Generation (RAG) question-answering system that combines document retrieval with large language models to answer queries from custom knowledge bases.",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1170&auto=format&fit=crop",
    tags: ["Python", "LangChain", "OpenAI", "RAG"],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/JanadaJayathilaka/RAG-QA-system",
    color: "hsl(200, 80%, 50%)",
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
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    slug: "careerpath",
    title: "CareerPath",
    category: "Fullstack",
    year: "2025",
    image: "/projects/careerPath.png",
    description:
      "CareerPath is a full-stack career and personalized roadmap platform designed to help students make informed career decisions. It provides structured skill-based roadmaps, AI guidance, task-based learning, progress tracking, and AI-powered career assistance, with a strong focus on students from Tier 2 and Tier 3 cities.",
    roles: ["Full-stack Developer", "System Architect"],
    client: "Personal Project",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "AI Chatbot"
    ],
    
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    features: [
      "User authentication with email verification and JWT",
      "Resume Builder with customizable templates",
      "Static Roadmaps for popular career paths",
      "Personalized career roadmaps based on goals",
      "Task-based learning with progress tracking",
      "Mentor discovery and interaction system",
      "AI-powered chatbot for career guidance",
      "Secure backend APIs and scalable architecture"
    ],
    technologies: [
      { name: "React", desc: "Frontend library for building scalable UI components." },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for responsive design." },
      { name: "Node.js", desc: "Backend runtime for handling application logic." },
      { name: "Express.js", desc: "REST API framework for backend services." },
      { name: "MongoDB", desc: "NoSQL database for user, roadmap, and task data." },
      { name: "JWT", desc: "Secure authentication and authorization mechanism." }
    ],
    buildSteps: [
      { step: "Clone the repository", command: "git clone https://github.com/sandeep1404-praj/careerPath.git" },
      { step: "Install dependencies", command: "npm install" },
      { step: "Configure environment variables", command: "Create a .env file with DB and JWT keys" },
      { step: "Run backend server", command: "npm run server" },
      { step: "Run frontend application", command: "npm run dev" }
    ],
    bgColor: "bg-[#4b4eba] dark:bg-[#4f76b4]",
    link: "/projects/careerpath",
    externalLink: "https://careerpathsan.netlify.app/"
  },

  {
    id: 2,
    slug: "apna-ghar",
    title: "Apna Ghar",
    category: "Fullstack",
    year: "2024",
    image: "/projects/apnaGhar2.png",
    description:
      "Apna Ghar is a MERN stack real estate web application that connects buyers and sellers on a single platform. Sellers can list and manage properties, while buyers can explore, save, and contact sellers directly through a secure and user-friendly interface.",
    roles: ["Full-stack Developer", "UI/UX Designer"],
    client: "Personal Project",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    features: [
      "Separate authentication flows for buyers and sellers",
      "Property listing, editing, and deletion",
      "Save and bookmark favorite properties",
      "Buyer-to-seller contact functionality",
      "User profile management",
      "JWT-based authentication and protected routes"
    ],
    technologies: [
      { name: "React", desc: "Frontend framework for dynamic UI rendering." },
      { name: "Tailwind CSS", desc: "Utility-first styling framework." },
      { name: "Node.js", desc: "Server-side JavaScript runtime." },
      { name: "Express.js", desc: "Backend framework for REST APIs." },
      { name: "MongoDB", desc: "Database for users and property listings." }
    ],
    buildSteps: [
      { step: "Clone the repository", command: "git clone https://github.com/sandeep1404-praj/Apna_Ghar.git" },
      { step: "Install dependencies", command: "npm install" },
      { step: "Setup environment variables", command: "Create .env file" },
      { step: "Start development server", command: "npm run dev" }
    ],
    bgColor: "bg-[#b0aeae] dark:bg-[#bdb7b7]",
    link: "/projects/apna-ghar",
    externalLink: "https://gharapna.netlify.app/"
  },

  {
    id: 3,
    slug: "tour-the-globe",
    title: "Tour The Globe",
    category: "Frontend",
    year: "2024",
    image: "/projects/tourTheGlobe.png",
    description:
      "Tour The Globe is a responsive travel-themed frontend website showcasing destinations, travel experiences, and modern layouts. The project focuses on clean UI design, component reusability, and smooth navigation across devices.",
    roles: ["Frontend Developer"],
    client: "Personal Project",
    tags: ["React", "Responsive Design", "UI/UX"],
    features: [
      "Fully responsive layout",
      "Modern travel-themed UI design",
      "Reusable React components",
      "Optimized for mobile and desktop devices",
      "Smooth navigation and clean structure"
    ],
    technologies: [
      { name: "React", desc: "Component-based frontend library." },
      { name: "CSS", desc: "Custom styling for layout and responsiveness." }
    ],
    bgColor: "bg-[#3d3c3c] dark:bg-[#1a1a1a]",
    link: "/projects/tour-the-globe",
    externalLink: "https://tourtheglobe.netlify.app/"
  },

  {
    id: 4,
    slug: "screensaga",
    title: "Screensaga",
    category: "Frontend",
    year: "2024",
    image: "/projects/Screensaga.png",
    description:
      "Screensaga is a premium agency landing page inspired by modern design studios. It features smooth scrolling, advanced animations, and visually engaging sections to deliver a high-end interactive user experience.",
    roles: ["Frontend Developer", "UI/UX Designer"],
    client: "Personal Project",
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "API Integration",
    ],
    // images: ["/projects/Screensaga.png"],
    bgColor: "bg-[#D4F5E9] dark:bg-[#d6423a]",
    link: "/projects/screensaga",
    externalLink: "https://github.com/yourusername/screensaga"
  }
];

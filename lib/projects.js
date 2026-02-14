export const projects = [
  {
    id: 1,
    slug: "careerpath",
    title: "CareerPath",
    category: "Fullstack",
    year: "2025",
    image: "/projects/careerPath/careerPath1.png",
    headerImage: "/projects/careerPath/careerPathBanner1.png",
    description:
      "CareerPath is a full-stack career and personalized roadmap platform designed to help students make informed career decisions. It provides structured skill-based roadmaps, AI guidance, task-based learning, progress tracking, and AI-powered career assistance, with a strong focus on students from Tier 2 and Tier 3 cities.",
    roles: ["Full-stack Developer", "System Architect"],
    client: "Personal Project",
    images: [
      "/projects/careerPath/careerPath1.png",
      "/projects/careerPath/cover1.png",
      "/projects/careerPath/cover2.png",
      "/projects/careerPath/cover3.png",
      "/projects/careerPath/cover4.png",
      "/projects/careerPath/cover5.png",
      "/projects/careerPath/cover6.png",
      "/projects/careerPath/cover7.png",
      "/projects/careerPath/cover8.png",
      "/projects/careerPath/cover9.png",
    ],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "AI Chatbot"
    ],
    
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
      "id": 2,
      "slug": "library-manager",
      "title": "Library Manager",
      "category": "Fullstack",
      "year": "2026",
      image: "/projects/library-of-thinks/library.png",
      "headerImage": "/projects/library-of-thinks/banner.png",
      "description": "Library Manager is a comprehensive full-stack marketplace and sharing platform. It enables communities to list items for sale, exchange, or borrow, featuring a structured inspection workflow where staff verify and rate items before listing. The platform includes a rewards system to incentivize community contributions and a robust request management system for seamless item transactions.",
      "roles": ["Full-stack Developer", "Backend Architect"],
      "client": "Personal Project",
      "tags": [
        "React",
        "Django",
        "Django REST Framework",
        "JWT",
        "Tailwind CSS",
        "MySQL",
        "Framer Motion"
      ],
      "features": [
        "Secure user authentication using JWT (Register/Login)",
        "Multi-transaction listings: Sell, Exchange, or Share items",
        "Staff inspection portal for item verification and star-rating",
        "Community Points System: Earn 10 points for every approved listing",
        "Public Browse interface with Search, Category, and Location filters",
        "Real-time item status tracking (Pending, Available, Borrowed)",
        "Integrated messaging system for buyer-seller communication",
        "Dynamic Dashboard for managing personal inventory and requests"
      ],
      "technologies": [
        { "name": "React 19", "desc": "Modern frontend with Vite for high-performance UI and component-based architecture." },
        { "name": "Django 6.0", "desc": "Robust Python backend framework handling business logic and security." },
        { "name": "Django REST Framework", "desc": "Powerful toolkit for building scalable RESTful APIs." },
        { "name": "Tailwind CSS v4", "desc": "Utility-first CSS framework for rapid and responsive UI development." },
        { "name": "JWT", "desc": "Secure stateless authentication for protected API endpoints." },
        { "name": "MySQL/SQLite", "desc": "Relational databases for managing users, transactions, and item data." }
      ],
      "buildSteps": [
        { "step": "Clone the repository", "command": "git clone https://github.com/sandeep1404-praj/Python-Project.git" },
        { "step": "Install Backend dependencies", "command": "cd backend && pip install -r requirements.txt" },
        { "step": "Initialize Database", "command": "python manage.py migrate" },
        { "step": "Install Frontend dependencies", "command": "cd client && npm install" },
        { "step": "Run Development Servers", "command": "npm run dev (frontend) & python manage.py runserver (backend)" }
      ],
      "bgColor": "bg-[#F9F5EA] dark:bg-[#506442]",
      "link": "/projects/library-manager",
      "externalLink": "https://github.com/sandeep1404-praj/Python-Project"
  },

  {
    id: 3,
    slug: "apna-ghar",
    title: "Apna Ghar",
    category: "Fullstack",
    year: "2024",
    image: "/projects/apnaGhar3.png",
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
    "id": 4,
    "slug": "algomantra",
    "title": "Digital Krishi Officer ",
    "category": "Fullstack",
    "year": "2025",
    "image": "/projects/Krishi/krishiHome.png",
    "headerImage": "/projects/Krishi/krishiHome.png",
    "description": "AlgoMantra is a comprehensive AI-driven agricultural advisory platform designed to empower farmers with digital tools. The system integrates deep learning models for accurate crop disease detection, a multi-agent chatbot for expert advisory, and real-time market data monitoring. By bridging the gap between advanced technology and traditional farming, AlgoMantra serves as a 'Digital Krishi Officer' that provides actionable insights on pest management, weather-based planning, and government schemes.",
    "roles": ["Full-stack Developer", "AI Engineer"],
    "client": "Personal Project",
    "tags": [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "PyTorch",
      "Tailwind CSS",
      "Google Gemini AI"
    ],
    "features": [
      "Multi-modal Disease Detection: Analyze leaf images and text symptoms using ResNet18 and CNN architectures",
      "Digital Krishi Officer: Intelligent chatbot utilizing Google Gemini AI and a custom agent dispatcher",
      "Market Insights: Real-time tracking of crop market prices and agricultural news updates",
      "Weather-Integrated Advisory: Task planning based on live weather data across different regions",
      "Scheme Navigator: Centralized access to government agricultural schemes, loans, and subsidies",
      "Secure Platform: Robust authentication system with JWT and OTP-based verification",
      "Automated Data Processing: CSV-based pest and disease dataset parsing for localized solutions",
      "Responsive Dashboard: Unified interface for managing farm data and receiving expert advice"
    ],
    "technologies": [
      { "name": "React 19", "desc": "Utilized for building a high-performance, component-based user interface with Vite." },
      { "name": "Node.js & Express", "desc": "A scalable backend architecture managing authentication, agent dispatching, and API integration." },
      { "name": "FastAPI", "desc": "High-performance Python framework for serving deep learning models with low latency." },
      { "name": "PyTorch", "desc": "Powering the computer vision models (CNN/ResNet18) for accurate crop disease classification." },
      { "name": "Tailwind CSS v4", "desc": "Used for rapid UI development with a modern, utility-first approach and earthy aesthetic." },
      { "name": "MongoDB", "desc": "NoSQL database for flexible storage of user profiles, OTP logs, and agricultural data." }
    ],
    "buildSteps": [
      { "step": "Clone the repository", "command": "git clone https://github.com/sandeep1404-praj/AlgoMantra---krishi" },
      { "step": "Set up Backend", "command": "cd backend && npm install && npm start" },
      { "step": "Initialize ML API", "command": "cd backend/ml_api && pip install -r requirements.txt && uvicorn app:app --port 8000" },
      { "step": "Launch Frontend", "command": "cd frontend && npm install && npm run dev" }
    ],
    "bgColor": "bg-[#B6D496] dark:bg-[#6A9560]",
    "link": "/projects/algomantra",
    "externalLink": "https://officialdigitalkrishi.netlify.app/"
  },

  {
    id: 5,
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
    id: 6,
    slug: "screensaga",
    title: "Screensaga",
    category: "Frontend",
    year: "2024",
    image: "/projects/Screensaga1.png",
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
    externalLink: "https://screensagamovies.netlify.app/"
  },

  {
    "id": 7,
    "slug": "pokemon-card",
    "title": "Pokemon Card Explorer",
    "category": "Frontend",
    "year": "2024",
    "image": "/projects/pokemon/pokemoncard.png",
    "headerImage": "/projects/pokemon/pokemoncard.png",
    "description": "Pokemon Card Explorer is a fast, responsive React app that fetches Pokemon data from the PokeAPI and renders clean, visual cards. Users can search by name and quickly scan core stats like height, weight, speed, experience, attack, and abilities. The UI focuses on readability, lightweight styling, and smooth hover interactions for an engaging browsing experience.",
    "roles": ["Frontend Developer"],
    "client": "Personal Project",
    "images":["/projects/pokemon/cards.png"],
    "tags": [
      "React",
      "Vite",
      "CSS",
      "PokeAPI"
    ],
    "features": [
      "Live data fetch from PokeAPI with full Pokemon details",
      "Search-as-you-type filtering by Pokemon name",
      "Card layout with stats, types, and abilities",
      "Responsive grid that adapts to small and large screens",
      "Lightweight UI with hover transitions"
    ],
    "technologies": [
      { "name": "React", "desc": "Component-based UI with hooks for fetching and filtering data." },
      { "name": "Vite", "desc": "Fast dev server and optimized build pipeline." },
      { "name": "CSS", "desc": "Custom styling for cards, grids, and responsive behavior." },
      { "name": "PokeAPI", "desc": "Public API used to retrieve Pokemon data and images." }
    ],
    "bgColor": "bg-[#EFF3FF] dark:bg-[#1E2433]",
    "link": "/projects/pokemon-card",
    "externalLink": "https://github.com/sandeep1404-praj/Pokemon-cards"
  },
];


export const projects = [
  // =========================================================
  // 1. ACADEMY TIMETABLE - FREELANCE
  // =========================================================
  {
    id: 1,
    slug: "academy-timetable",
    title: "Academy Timetable Management System",
    category: "Fullstack",
    featured: true,
    year: "2026",
    image: "/projects/academy-timetable/cover.png",
    headerImage: "/projects/academy-timetable/cover.png",
    description:
      "A production-ready timetable management application developed for an academy as a freelance client project. The platform streamlines timetable creation and academic scheduling with a modern web interface, PDF exports, containerized deployment, and automated CI/CD workflows.",
    roles: ["Full-stack Developer", "DevOps Engineer"],
    client: "Freelance Client Project",
    images: [],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "PDF Generation",
    ],
    features: [
      "Academy timetable management",
      "Academic scheduling workflow",
      "Timetable PDF generation and export",
      "Production deployment on Hostinger VPS",
      "Docker-based application deployment",
      "Nginx reverse proxy configuration",
      "Automated CI/CD using GitHub Actions",
      "Automated deployment on updates to the main branch",
      "Production server configuration and maintenance",
    ],
    technologies: [
      {
        name: "React",
        desc: "Frontend application for timetable management.",
      },
      {
        name: "Node.js & Express",
        desc: "Backend API and application logic.",
      },
      {
        name: "MongoDB",
        desc: "Database for application data.",
      },
      {
        name: "Docker",
        desc: "Containerization for consistent deployment and runtime.",
      },
      {
        name: "Nginx",
        desc: "Reverse proxy and web server configuration.",
      },
      {
        name: "GitHub Actions",
        desc: "Automated CI/CD deployment workflow.",
      },
      {
        name: "Puppeteer",
        desc: "Browser automation for PDF generation.",
      },
    ],
    buildSteps: [
      {
        step: "Not Avaliable",
        command: "Not Avaliable",
      },
    ],
    bgColor: "bg-[#d9e7f5] dark:bg-[#243b53]",
    link: "/projects/academy-timetable",
    externalLink: "",
  },

  // =========================================================
  // 2. CAREERPATH
  // =========================================================
  {
    id: 2,
    slug: "careerpath",
    title: "CareerPath",
    category: "Fullstack",
    featured: true,
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
      "AI Chatbot",
    ],
    features: [
      "User authentication with email verification and JWT",
      "Resume Builder with customizable templates",
      "Static roadmaps for popular career paths",
      "Personalized career roadmaps based on goals",
      "Task-based learning with progress tracking",
      "Mentor discovery and interaction system",
      "AI-powered chatbot for career guidance",
      "Secure backend APIs and scalable architecture",
    ],
    technologies: [
      {
        name: "React",
        desc: "Frontend library for building scalable UI components.",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first CSS framework for responsive design.",
      },
      {
        name: "Node.js",
        desc: "Backend runtime for handling application logic.",
      },
      {
        name: "Express.js",
        desc: "REST API framework for backend services.",
      },
      {
        name: "MongoDB",
        desc: "NoSQL database for user, roadmap, and task data.",
      },
      {
        name: "JWT",
        desc: "Secure authentication and authorization mechanism.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/careerPath.git",
      },
      {
        step: "Install dependencies",
        command: "npm install",
      },
      {
        step: "Configure environment variables",
        command: "Create a .env file with DB and JWT keys",
      },
      {
        step: "Run backend server",
        command: "npm run server",
      },
      {
        step: "Run frontend application",
        command: "npm run dev",
      },
    ],
    bgColor: "bg-[#4b4eba] dark:bg-[#4f76b4]",
    link: "/projects/careerpath",
    externalLink: "https://careerpathsan.netlify.app/",
  },

  // =========================================================
  // 3. AI VIDEO ASSISTANT WITH RAG
  // =========================================================
  {
    id: 3,
    slug: "ai-video-assistant-rag",
    title: "AI Video Assistant with RAG",
    category: "AI",
    featured: true,
    year: "2026",
    image: "/projects/ai-video-assistant/banner.png",
    headerImage: "/projects/ai-video-assistant/banner.png",
    description:
      "An AI-powered video assistant that enables users to ask natural-language questions about video content. It processes video transcripts, splits content into meaningful chunks, generates embeddings, and retrieves relevant context using semantic search to produce grounded responses through a language model.",
    roles: ["AI Developer", "Backend Developer"],
    client: "Personal Project",
    images: [
      "/projects/ai-video-assistant/banner.png",
      "/projects/ai-video-assistant/cover1.png",
      "/projects/ai-video-assistant/cover2.png",
      "/projects/ai-video-assistant/cover3.png",
    ],
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "LLM",
      "Embeddings",
      "Vector Database",
      "Semantic Search",
    ],
    features: [
      "Video transcript processing",
      "Transcript chunking for contextual retrieval",
      "Embedding generation",
      "Semantic similarity search",
      "Retrieval-Augmented Generation pipeline",
      "Context-grounded AI responses",
      "Question answering over video content",
    ],
    technologies: [
      {
        name: "Python",
        desc: "Core language for AI pipeline implementation.",
      },
      {
        name: "LangChain",
        desc: "Framework for building LLM-powered retrieval workflows.",
      },
      {
        name: "Embeddings",
        desc: "Transforms transcript chunks into searchable vector representations.",
      },
      {
        name: "Vector Database",
        desc: "Stores and retrieves semantically relevant transcript chunks.",
      },
      {
        name: "LLM APIs",
        desc: "Generates answers based on retrieved video context.",
      },
      {
        name: "RAG",
        desc: "Grounds answers using retrieved information from video transcripts.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/AI-Video-Assistant-With-RAG.git",
      },
      {
        step: "Install dependencies",
        command: "pip install -r requirements.txt",
      },
      {
        step: "Configure API keys",
        command: "Add the required LLM and embedding credentials",
      },
      {
        step: "Run the application",
        command: "Start the application using its configured entry point",
      },
    ],
    bgColor: "bg-[#283b64] dark:bg-[#17243c]",
    link: "/projects/ai-video-assistant-rag",
    externalLink:
      "https://github.com/sandeep1404-praj/AI-Video-Assistant-With-RAG",
  },

  // =========================================================
  // 4. AI RESEARCHER AGENT
  // =========================================================
  {
    id: 4,
    slug: "ai-researcher-agent",
    title: "AI Researcher Agent",
    category: "AI",
    featured: true,
    year: "2026",
    image: "/projects/ai-researcher/banner.png",
    headerImage: "/projects/ai-researcher/banner.png",
    description:
      "An autonomous AI research agent designed to investigate topics by planning research tasks, searching the web using external tools, collecting relevant information, and synthesizing findings into structured reports. It uses multi-step agent workflows and tool calling to automate information gathering.",
    roles: ["AI Developer", "Agent Architect"],
    client: "Personal Project",
    images: [
      "/projects/ai-researcher/banner.png",
      "/projects/ai-researcher/cover1.png",
      "/projects/ai-researcher/cover2.png",
      "/projects/ai-researcher/cover3.png",
      "/projects/ai-researcher/cover4.png",
    ],
    tags: [
      "Python",
      "LangChain",
      "AI Agents",
      "Tool Calling",
      "LLM",
      "Web Search",
      "Automation",
    ],
    features: [
      "Autonomous research task planning",
      "Web search using external tools",
      "Automated information gathering",
      "Multi-step agent workflow",
      "Tool calling and execution",
      "Research synthesis",
      "Structured report generation",
    ],
    technologies: [
      {
        name: "Python",
        desc: "Core programming language for the agent workflow.",
      },
      {
        name: "LangChain",
        desc: "Framework for constructing LLM-powered agent workflows.",
      },
      {
        name: "LLM Agents",
        desc: "Reasoning and task orchestration for multi-step research.",
      },
      {
        name: "Tool Calling",
        desc: "Allows the agent to invoke external tools for research.",
      },
      {
        name: "Web Search",
        desc: "Retrieves relevant information from online sources.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Ai-Researcher-AI-Agent-",
      },
      {
        step: "Install dependencies",
        command: "pip install -r requirements.txt",
      },
      {
        step: "Configure API keys",
        command: "Set up required LLM and search API credentials",
      },
      {
        step: "Run the agent",
        command: "Start the application using its configured entry point",
      },
    ],
    bgColor: "bg-[#35405e] dark:bg-[#1c2540]",
    link: "/projects/ai-researcher-agent",
    externalLink:
      "https://github.com/sandeep1404-praj/Ai-Researcher-AI-Agent-",
  },

  // =========================================================
  // 5. LIBRARY OF THINGS
  // =========================================================
  {
    id: 5,
    slug: "library-manager",
    title: "Library of Things",
    category: "Fullstack",
    featured: true,
    year: "2026",
    image: "/projects/library-of-thinks/library.png",
    headerImage: "/projects/library-of-thinks/banner.png",
    description:
      "Library of Things is a full-stack community marketplace and sharing platform that enables people to sell, exchange, or borrow items. It includes a structured staff inspection workflow, item verification and rating, community rewards, and request management for transparent item transactions.",
    roles: ["Full-stack Developer", "Backend Architect"],
    client: "Personal Project",
    images: [],
    tags: [
      "React",
      "Django",
      "Django REST Framework",
      "JWT",
      "Tailwind CSS",
      "MySQL",
      "Framer Motion",
    ],
    features: [
      "Secure user authentication using JWT",
      "Multi-transaction listings: Sell, Exchange, or Share items",
      "Staff inspection portal for item verification and ratings",
      "Community points system for approved listings",
      "Public browsing with search, category, and location filters",
      "Item status tracking: Pending, Available, and Borrowed",
      "Messaging system for item-related communication",
      "Dashboard for inventory and request management",
    ],
    technologies: [
      {
        name: "React 19",
        desc: "Modern frontend with Vite for high-performance UI and component-based architecture.",
      },
      {
        name: "Django",
        desc: "Python backend framework handling business logic and security.",
      },
      {
        name: "Django REST Framework",
        desc: "Toolkit for building RESTful APIs.",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first styling for responsive UI development.",
      },
      {
        name: "JWT",
        desc: "Secure stateless authentication for protected API endpoints.",
      },
      {
        name: "MySQL / SQLite",
        desc: "Relational databases for managing users, transactions, and item data.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Python-Project.git",
      },
      {
        step: "Install backend dependencies",
        command: "cd backend && pip install -r requirements.txt",
      },
      {
        step: "Initialize database",
        command: "python manage.py migrate",
      },
      {
        step: "Install frontend dependencies",
        command: "cd client && npm install",
      },
      {
        step: "Run development servers",
        command:
          "npm run dev (frontend) & python manage.py runserver (backend)",
      },
    ],
    bgColor: "bg-[#F9F5EA] dark:bg-[#506442]",
    link: "/projects/library-manager",
    externalLink:
      "https://github.com/sandeep1404-praj/Python-Project",
  },

  // =========================================================
  // 6. APNA GHAR
  // =========================================================
  {
    id: 6,
    slug: "apna-ghar",
    title: "Apna Ghar",
    category: "Fullstack",
    featured: true,
    year: "2024",
    image: "/projects/apnaGhar3.png",
    description:
      "Apna Ghar is a MERN stack real estate web application that connects buyers and sellers on a single platform. Sellers can list and manage properties, while buyers can explore, save, and contact sellers directly through a secure and user-friendly interface.",
    roles: ["Full-stack Developer", "UI/UX Designer"],
    client: "Personal Project",
    images: [],
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "Separate authentication flows for buyers and sellers",
      "Property listing, editing, and deletion",
      "Save and bookmark favorite properties",
      "Buyer-to-seller contact functionality",
      "User profile management",
      "JWT-based authentication and protected routes",
    ],
    technologies: [
      {
        name: "React",
        desc: "Frontend framework for dynamic UI rendering.",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first styling framework.",
      },
      {
        name: "Node.js",
        desc: "Server-side JavaScript runtime.",
      },
      {
        name: "Express.js",
        desc: "Backend framework for REST APIs.",
      },
      {
        name: "MongoDB",
        desc: "Database for users and property listings.",
      },
      {
        name: "JWT",
        desc: "Authentication and authorization for protected routes.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Apna_Ghar.git",
      },
      {
        step: "Install dependencies",
        command: "npm install",
      },
      {
        step: "Setup environment variables",
        command: "Create .env file",
      },
      {
        step: "Start development server",
        command: "npm run dev",
      },
    ],
    bgColor: "bg-[#b0aeae] dark:bg-[#bdb7b7]",
    link: "/projects/apna-ghar",
    externalLink: "https://gharapna.netlify.app/",
  },

  // =========================================================
  // 7. ALGOMANTRA - DIGITAL KRISHI OFFICER
  // =========================================================
  {
    id: 7,
    slug: "algomantra",
    title: "AlgoMantra - Digital Krishi Officer",
    category: "AI / Fullstack",
    featured: true,
    year: "2025",
    image: "/projects/Krishi/krishiHome.png",
    headerImage: "/projects/Krishi/krishiHome.png",
    description:
      "AlgoMantra is an AI-driven agricultural advisory platform designed to empower farmers with digital tools. It integrates deep learning models for crop disease detection, an AI-powered agricultural assistant, market insights, and weather-aware planning. The platform provides actionable guidance for pest management, crop planning, and government agricultural schemes.",
    roles: ["Full-stack Developer", "AI Engineer"],
    client: "Personal Project",
    images: [],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "PyTorch",
      "CNN",
      "ResNet18",
      "Google Gemini AI",
    ],
    features: [
      "Crop disease detection using leaf images and symptom inputs",
      "Deep learning models based on CNN and ResNet18 architectures",
      "AI agricultural assistant powered by Gemini",
      "Agent-based dispatching for AI assistance",
      "Crop market price and agricultural news insights",
      "Weather-integrated agricultural planning",
      "Government scheme, loan, and subsidy navigation",
      "JWT authentication and OTP-based verification",
      "CSV-based agricultural dataset processing",
      "Responsive agricultural dashboard",
    ],
    technologies: [
      {
        name: "React 19",
        desc: "Component-based frontend application built with Vite.",
      },
      {
        name: "Node.js & Express",
        desc: "Backend APIs, authentication, agent dispatching, and integrations.",
      },
      {
        name: "FastAPI",
        desc: "Python API serving machine learning inference.",
      },
      {
        name: "PyTorch",
        desc: "Deep learning framework used for crop disease classification.",
      },
      {
        name: "CNN / ResNet18",
        desc: "Computer vision architectures for image-based disease detection.",
      },
      {
        name: "Google Gemini AI",
        desc: "Generative AI for agricultural assistance and advisory.",
      },
      {
        name: "MongoDB",
        desc: "Database for user profiles and application data.",
      },
      {
        name: "Tailwind CSS",
        desc: "Responsive UI styling.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/AlgoMantra---krishi",
      },
      {
        step: "Install backend dependencies",
        command: "cd backend && npm install",
      },
      {
        step: "Start backend server",
        command: "npm start",
      },
      {
        step: "Setup machine learning API",
        command:
          "cd backend/ml_api && pip install -r requirements.txt",
      },
      {
        step: "Start ML API",
        command: "uvicorn app:app --port 8000",
      },
      {
        step: "Install frontend dependencies",
        command: "cd frontend && npm install",
      },
      {
        step: "Launch frontend",
        command: "npm run dev",
      },
    ],
    bgColor: "bg-[#B6D496] dark:bg-[#6A9560]",
    link: "/projects/algomantra",
    externalLink: "https://officialdigitalkrishi.netlify.app/",
  },

  // =========================================================
  // 8. AI POST CALENDAR GENERATOR
  // =========================================================
  {
    id: 8,
    slug: "ai-post-calendar-generator",
    title: "AI Post Calendar Generator",
    category: "AI",
    featured: false,
    year: "2026",
    image: "/projects/ai-post-calendar/banner.png",
    headerImage: "/projects/ai-post-calendar/banner.png",
    description:
      "An AI-powered content planning tool that generates social media calendars based on a brand, niche, target audience, and posting frequency. It uses prompt engineering and structured AI outputs to generate content themes, captions, and scheduling ideas.",
    roles: ["AI Developer", "Python Developer"],
    client: "Personal Project",
    images: [],
    tags: [
      "Python",
      "Generative AI",
      "LLM APIs",
      "Prompt Engineering",
      "Content Automation",
    ],
    features: [
      "Brand and niche-based content generation",
      "Custom posting frequency",
      "Automated content calendar generation",
      "Post themes and content ideas",
      "AI-generated captions",
      "Structured date-based output",
      "Content planning automation",
    ],
    technologies: [
      {
        name: "Python",
        desc: "Application logic and AI workflow implementation.",
      },
      {
        name: "Generative AI",
        desc: "Generates creative content and post ideas.",
      },
      {
        name: "LLM APIs",
        desc: "Provides AI-powered calendar and caption generation.",
      },
      {
        name: "Prompt Engineering",
        desc: "Guides the AI to generate structured and relevant content.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/AI-Post-Calendar-Generator.git",
      },
      {
        step: "Install dependencies",
        command: "pip install -r requirements.txt",
      },
      {
        step: "Configure AI API credentials",
        command: "Set the required environment variables",
      },
      {
        step: "Run the application",
        command: "Start using the configured application entry point",
      },
    ],
    bgColor: "bg-[#7656a6] dark:bg-[#3d2d5b]",
    link: "/projects/ai-post-calendar-generator",
    externalLink:
      "https://github.com/sandeep1404-praj/AI-Post-Calendar-Generator",
  },

  // =========================================================
  // 9. MENTAL HEALTH SCORE PREDICTION
  // =========================================================
  {
    id: 9,
    slug: "mental-health-score-prediction",
    title: "Mental Health Score Prediction",
    category: "Data Science",
    featured: false,
    year: "2026",
    image: "/projects/mental-health-prediction/banner.png",
    headerImage: "/projects/mental-health-prediction/banner.png",
    description:
      "A machine learning project focused on predicting mental health scores using structured data. The workflow includes data preprocessing, exploratory data analysis, feature engineering, model training, comparison, and evaluation, supported by statistical visualizations.",
    roles: ["Data Scientist", "Machine Learning Developer"],
    client: "Personal Project",
    images: [],
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Machine Learning",
    ],
    features: [
      "Dataset cleaning and preprocessing",
      "Exploratory Data Analysis",
      "Feature engineering",
      "Machine learning model training",
      "Model comparison and evaluation",
      "Feature correlation analysis",
      "Data visualization",
    ],
    technologies: [
      {
        name: "Python",
        desc: "Programming language used for the data science workflow.",
      },
      {
        name: "Pandas",
        desc: "Data manipulation and analysis.",
      },
      {
        name: "NumPy",
        desc: "Numerical computation and array operations.",
      },
      {
        name: "Scikit-learn",
        desc: "Machine learning models and evaluation tools.",
      },
      {
        name: "Seaborn",
        desc: "Statistical visualization and correlation analysis.",
      },
      {
        name: "Matplotlib",
        desc: "Data visualization and plotting.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Mental-Health-Score-Prediction.git",
      },
      {
        step: "Install dependencies",
        command: "pip install -r requirements.txt",
      },
      {
        step: "Load and preprocess dataset",
        command: "Run data preprocessing and analysis notebooks",
      },
      {
        step: "Train and evaluate models",
        command: "Execute model training and evaluation scripts",
      },
    ],
    bgColor: "bg-[#4d687a] dark:bg-[#263c4c]",
    link: "/projects/mental-health-score-prediction",
    externalLink:
      "https://github.com/sandeep1404-praj/Mental-Health-Score-Prediction",
  },

  // =========================================================
  // 10. SENTIMENT ANALYSIS
  // =========================================================
  {
    id: 10,
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    category: "AI / NLP",
    featured: false,
    year: "2026",
    image: "/projects/sentiment-analysis/banner.png",
    headerImage: "/projects/sentiment-analysis/banner.png",
    description:
      "A Natural Language Processing project that analyzes textual data and classifies sentiment into positive, negative, or neutral categories. It includes text preprocessing, feature extraction, classification, and evaluation using standard machine learning metrics.",
    roles: ["NLP Developer", "Machine Learning Developer"],
    client: "Personal Project",
    images: [],
    tags: [
      "Python",
      "NLP",
      "Text Classification",
      "Scikit-learn",
      "Deep Learning",
      "TF-IDF",
    ],
    features: [
      "Text preprocessing and normalization",
      "Text vectorization",
      "Positive sentiment classification",
      "Negative sentiment classification",
      "Neutral sentiment classification",
      "Model evaluation using precision, recall, and F1-score",
      "Achieved 89% accuracy according to project results",
    ],
    technologies: [
      {
        name: "Python",
        desc: "Core language for NLP processing and model development.",
      },
      {
        name: "NLP",
        desc: "Processes and analyzes natural-language text.",
      },
      {
        name: "Scikit-learn",
        desc: "Text vectorization, classification, and model evaluation.",
      },
      {
        name: "TF-IDF",
        desc: "Transforms textual data into numerical feature representations.",
      },
      {
        name: "Deep Learning",
        desc: "Exploration of deep learning approaches for text classification.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Sentiment-Analysis.git",
      },
      {
        step: "Install dependencies",
        command: "pip install -r requirements.txt",
      },
      {
        step: "Preprocess text",
        command: "Run the text cleaning and preprocessing pipeline",
      },
      {
        step: "Train and evaluate model",
        command: "Execute model training and evaluation scripts",
      },
    ],
    bgColor: "bg-[#a66b7a] dark:bg-[#603c48]",
    link: "/projects/sentiment-analysis",
    externalLink:
      "https://github.com/sandeep1404-praj/Sentiment-Analysis",
  },

  // =========================================================
  // 11. MOVIE RECOMMENDATION SYSTEM
  // =========================================================
  {
    id: 11,
    slug: "movie-recommendation",
    title: "Movie Recommendation System",
    category: "Data Science",
    featured: false,
    year: "2026",
    image: "/projects/movie-recommendation/banner.png",
    headerImage: "/projects/movie-recommendation/banner.png",
    description:
      "A content-based movie recommendation system that analyzes movie metadata and recommends similar movies based on their content features. It uses text feature extraction and cosine similarity to identify movies with related characteristics.",
    roles: ["Machine Learning Developer", "Data Scientist"],
    client: "Personal Project",
    images: [],
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Recommendation Systems",
      "Cosine Similarity",
      "Machine Learning",
    ],
    features: [
      "Movie metadata processing",
      "Content-based recommendations",
      "Text feature extraction",
      "Similarity score computation",
      "Cosine similarity-based movie matching",
      "Relevant movie recommendation results",
    ],
    technologies: [
      {
        name: "Python",
        desc: "Core language used for recommendation logic.",
      },
      {
        name: "Pandas",
        desc: "Movie dataset manipulation and preprocessing.",
      },
      {
        name: "Scikit-learn",
        desc: "Feature vectorization and similarity computations.",
      },
      {
        name: "Cosine Similarity",
        desc: "Measures similarity between movie feature vectors.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Movie-Recommendation.git",
      },
      {
        step: "Install dependencies",
        command: "pip install -r requirements.txt",
      },
      {
        step: "Load movie dataset",
        command: "Configure and load the movie metadata dataset",
      },
      {
        step: "Run recommendation system",
        command: "Execute the recommendation application",
      },
    ],
    bgColor: "bg-[#6c5b82] dark:bg-[#39304b]",
    link: "/projects/movie-recommendation",
    externalLink:
      "https://github.com/sandeep1404-praj/Movie-Recommendation",
  },

  // =========================================================
  // 12. TOUR THE GLOBE
  // =========================================================
  {
    id: 12,
    slug: "tour-the-globe",
    title: "Tour The Globe",
    category: "Frontend",
    featured: false,
    year: "2024",
    image: "/projects/tourTheGlobe.png",
    description:
      "Tour The Globe is a responsive travel-themed frontend website showcasing destinations, travel experiences, and modern layouts. The project focuses on clean UI design, component reusability, and smooth navigation across devices.",
    roles: ["Frontend Developer"],
    client: "Personal Project",
    images: [],
    tags: ["React", "Responsive Design", "UI/UX"],
    features: [
      "Fully responsive layout",
      "Modern travel-themed UI design",
      "Reusable React components",
      "Optimized for mobile and desktop devices",
      "Smooth navigation and clean structure",
    ],
    technologies: [
      {
        name: "React",
        desc: "Component-based frontend library.",
      },
      {
        name: "CSS",
        desc: "Custom styling for layout and responsiveness.",
      },
    ],
    bgColor: "bg-[#3d3c3c] dark:bg-[#1a1a1a]",
    link: "/projects/tour-the-globe",
    externalLink: "https://tourtheglobe.netlify.app/",
  },

  // =========================================================
  // 13. SCREENSAGA
  // =========================================================
  {
    id: 13,
    slug: "screensaga",
    title: "Screensaga",
    category: "Frontend",
    featured: false,
    year: "2024",
    image: "/projects/Screensaga1.png",
    description:
      "Screensaga is a premium cinematic landing page inspired by modern creative studios. It features smooth scrolling, advanced animations, visually engaging sections, and API integration to deliver a polished interactive user experience.",
    roles: ["Frontend Developer", "UI/UX Designer"],
    client: "Personal Project",
    images: [],
    tags: [
      "React",
      "Tailwind CSS",
      "API Integration",
      "Animation",
      "UI/UX",
    ],
    features: [
      "Premium cinematic interface",
      "Smooth scrolling experience",
      "Modern animations",
      "API integration",
      "Responsive layouts",
      "Interactive user interface",
    ],
    technologies: [
      {
        name: "React",
        desc: "Component-based interface development.",
      },
      {
        name: "Tailwind CSS",
        desc: "Styling and responsive layout.",
      },
      {
        name: "API Integration",
        desc: "Dynamic data integration into the interface.",
      },
    ],
    bgColor: "bg-[#D4F5E9] dark:bg-[#d6423a]",
    link: "/projects/screensaga",
    externalLink: "https://screensagamovies.netlify.app/",
  },

  // =========================================================
  // 14. POKEMON CARD EXPLORER
  // =========================================================
  {
    id: 14,
    slug: "pokemon-card",
    title: "Pokemon Card Explorer",
    category: "Frontend",
    featured: false,
    year: "2024",
    image: "/projects/pokemon/pokemoncard.png",
    headerImage: "/projects/pokemon/pokemoncard.png",
    description:
      "Pokemon Card Explorer is a responsive React application that fetches Pokemon data from the PokeAPI and displays it in visual cards. Users can search by name and explore core stats, types, abilities, height, weight, speed, experience, and attack details.",
    roles: ["Frontend Developer"],
    client: "Personal Project",
    images: ["/projects/pokemon/cards.png"],
    tags: ["React", "Vite", "CSS", "PokeAPI"],
    features: [
      "Live data fetch from PokeAPI",
      "Search-as-you-type filtering by Pokemon name",
      "Card layout with stats, types, and abilities",
      "Responsive grid for mobile and desktop",
      "Lightweight interface with hover transitions",
    ],
    technologies: [
      {
        name: "React",
        desc: "Component-based UI with hooks for fetching and filtering data.",
      },
      {
        name: "Vite",
        desc: "Fast development server and optimized build pipeline.",
      },
      {
        name: "CSS",
        desc: "Custom styling for cards, grids, and responsive layouts.",
      },
      {
        name: "PokeAPI",
        desc: "Public API used to retrieve Pokemon data and images.",
      },
    ],
    buildSteps: [
      {
        step: "Clone the repository",
        command:
          "git clone https://github.com/sandeep1404-praj/Pokemon-cards.git",
      },
      {
        step: "Install dependencies",
        command: "npm install",
      },
      {
        step: "Run development server",
        command: "npm run dev",
      },
    ],
    bgColor: "bg-[#EFF3FF] dark:bg-[#1E2433]",
    link: "/projects/pokemon-card",
    externalLink:
      "https://github.com/sandeep1404-praj/Pokemon-cards",
  },
];

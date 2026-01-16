export const projects = [
  {
    id: 1,
    slug: "aora",
    title: "Aora",
    category: "App Development",
    year: "2024",
    image: "/projects/arora.png",
    // headerImage: "/projects/aora-header.png", 
    description: "The Video Sharing App is an engaging platform that empowers users to connect through video content. It allows users to seamlessly upload, view, and share videos with others in the app's community, fostering creativity and interaction.",
    roles: ["App Developer"],
    client: "Personal Project",
    tags: ["React-Native", "Expo", "AppWrite", "NativeWind", "Animatable"],
    bgColor: "bg-[#FFF9E6] dark:bg-[#2a2a1a]",
    link: "/projects/aora",
    externalLink: "https://github.com/DevrajDC/Aora"
  },
  {
    id: 2,
    slug: "code-screenshot",
    title: "Code Screenshot",
    category: "Fullstack",
    year: "2024",
    image: "/projects/code-screenshot.png",
    description: "A powerful tool to create beautiful snippets of your code and share them with the world.",
    roles: ["Full-stack Developer", "UI/UX Designer"],
    client: "Personal Project",
    tags: ["React", "Tailwind CSS", "Node.js"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example video tribute
    features: [
      "10+ elegant themes (light + dark theme included).",
      "12+ font styles (popular monospace fonts).",
      "Support for all popular languages with auto-detection and syntax highlighting.",
      "Multiple export options: save as SVG/PNG, copy to clipboard and copy link.",
      "Other customization options like: font size, padding, background etc."
    ],
    technologies: [
      { name: "React", desc: "Front-End JavaScript library." },
      { name: "Tailwind CSS", desc: "A utility-first CSS framework." },
      { name: "ShadCN UI", desc: "Re-usable components built using Radix UI and Tailwind CSS." },
      { name: "Zustand", desc: "Bear necessities for state management in React." },
      { name: "Highlight.js", desc: "Syntax highlighter." }
    ],
    buildSteps: [
      { step: "Clone this repo", command: "git clone https://github.com/DevrajDC/dc-code-screenshot && cd code-screenshot" },
      { step: "Install project dependencies", command: "npm install" },
      { step: "Build the project and start a local server", command: "npm run build && npm run serve" }
    ],
    bgColor: "bg-[#E8E0D8] dark:bg-[#2a2622]",
    link: "/projects/code-screenshot"
  },
  {
    id: 3,
    slug: "iphone-15-pro",
    title: "iPhone 15 Pro",
    category: "Frontend",
    year: "2024",
    image: "/projects/iphone-15-pro.png",
    bgColor: "bg-[#F5F5F5] dark:bg-[#1a1a1a]",
    link: "/projects/iphone-15-pro"
  },
  {
    id: 4,
    slug: "ochi-design",
    title: "Ochi Design",
    category: "Fullstack",
    year: "2024",
    image: "/projects/ochi-design.png",
    description: "A modern landing page design for an agency website built with React.js and other modern technologies with cool interactive animations.",
    roles: ["Full-stack Developer", "UI/UX Designer"],
    client: "Ochi Design",
    tags: ["ReactJS", "GSAP", "Framer-Motion", "TailwindCSS", "Locomotive-Scroll"],
    images: ["/projects/ochi-1.png"], // Example image after title
    bgColor: "bg-[#D4F5E9] dark:bg-[#1a2a22]",
    link: "/projects/ochi-design"
  }
];

export const personalInfo = {
  name: "Nagendra Varma",
  shortName: "nagendra",
  titles: [
    "Full-Stack Web Developer",
    "React & Frontend Engineer",
    "UI/UX & Creative Designer",
    "Performance & SEO Specialist"
  ],
  bio: "I'm a passionate web developer and designer dedicated to crafting responsive, high-performance web applications with stunning visual aesthetics. With deep expertise in React, modern JavaScript, and design systems, I turn creative concepts into seamless digital experiences.",
  avatar: "/images/hero.jpg",
  heroAlt: "Nagendra Varma - Web Developer",
  details: [
    { label: "Birthday", value: "25 Aug 2003", icon: "Calendar" },
    { label: "Age", value: "21 Years", icon: "User" },
    { label: "Degree", value: "B.Tech in CSE", icon: "GraduationCap" },
    { label: "Email", value: "nagendravarma061@gmail.com", isCopyable: true, icon: "Mail" },
    { label: "Phone", value: "+91 8525928xxx", isCopyable: true, icon: "Phone" },
    { label: "Location", value: "India", icon: "MapPin" },
    { label: "Freelance", value: "Available Now", status: "available", icon: "Briefcase" },
    { label: "Website", value: "digitalpromax.blogspot.com", isLink: true, href: "https://digitalpromax.blogspot.com", icon: "Globe" }
  ],
  stats: [
    { number: "15+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Code Quality" },
    { number: "100%", label: "Client Satisfaction" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Nagendra061", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:nagendravarma061@gmail.com", icon: "Mail" },
    { name: "Website", url: "https://digitalpromax.blogspot.com", icon: "Globe" }
  ]
};

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5 / Semantic Markup", percent: 95 },
      { name: "CSS3 / Modern Flexbox & Grid", percent: 92 },
      { name: "JavaScript (ES6+)", percent: 88 },
      { name: "React.js & Hooks", percent: 86 },
      { name: "Responsive & Mobile-First Design", percent: 94 }
    ]
  },
  {
    category: "Styling & UI Systems",
    items: [
      { name: "CSS Variables & Design Tokens", percent: 90 },
      { name: "UI/UX & Wireframing", percent: 85 },
      { name: "Animations & Transitions", percent: 84 },
      { name: "Glassmorphism & Modern Aesthetics", percent: 92 }
    ]
  },
  {
    category: "Backend & Computer Science",
    items: [
      { name: "Node.js Fundamentals", percent: 72 },
      { name: "RESTful API Integration", percent: 82 },
      { name: "C Programming & Algorithms", percent: 78 },
      { name: "Data Structures & Core CS", percent: 80 }
    ]
  },
  {
    category: "Tools & Optimization",
    items: [
      { name: "Git & GitHub Workflow", percent: 88 },
      { name: "Vite & Modern Build Tools", percent: 86 },
      { name: "Chrome DevTools & Debugging", percent: 90 },
      { name: "Performance & SEO Optimization", percent: 85 }
    ]
  }
];

export const education = [
  {
    period: "2021 — 2024",
    title: "B.Tech in Computer Science and Engineering",
    institution: "University Institute of Technology",
    description: "Specialized in Computer Science and Systems Engineering. Studied core principles including Data Structures, Algorithms, Web Application Development, Database Systems, and Object-Oriented Programming."
  },
  {
    period: "2019 — 2021",
    title: "Intermediate / Higher Secondary (MPC)",
    institution: "State Junior College",
    description: "Rigorous focus on Mathematics, Physics, and Analytical Logic. Graduated with distinction, setting the foundation for algorithmic thinking and computer science."
  },
  {
    period: "2018 — 2019",
    title: "Secondary School Certificate (SSC)",
    institution: "High School Education",
    description: "Completed with outstanding grades across all core sciences and mathematics, discovering a passionate early interest in software engineering and web design."
  }
];

export const experience = [
  {
    period: "2023 — Present",
    title: "Frontend Developer & UI Designer",
    company: "Freelance & Independent Projects",
    description: "Crafting modern, accessible, and high-performance React web applications. Implementing responsive designs, smooth UI animations, dark/light themes, and custom component systems."
  },
  {
    period: "2022 — 2023",
    title: "Web Developer Intern",
    company: "Digital Pro Studio",
    description: "Assisted in redesigning customer websites, converting legacy static web pages to modular responsive layouts, and improving page load speeds by optimizing assets and CSS."
  },
  {
    period: "2021 — 2022",
    title: "Web Design Enthusiast & Content Creator",
    company: "Tech Creator & Blogger",
    description: "Published technical tutorials and guides on web design, modern CSS techniques, and beginner programming, building a portfolio of exploratory frontend projects."
  }
];

export const services = [
  {
    id: "web-design",
    icon: "Layout",
    title: "Web & UI Design",
    description: "Designing sleek, modern, and engaging user interfaces with meticulous attention to typography, spacing, color theory, and responsive hierarchy.",
    features: ["Figma to Web Conversion", "Design Systems & Style Guides", "Interactive Micro-Animations"]
  },
  {
    id: "frontend-dev",
    icon: "Code2",
    title: "Frontend Development",
    description: "Building responsive, component-driven web applications using modern React, Vite, and clean modular JavaScript.",
    features: ["Reusable React Components", "State Management & Hooks", "Cross-Browser Compatibility"]
  },
  {
    id: "responsive-design",
    icon: "Smartphone",
    title: "Responsive Architecture",
    description: "Ensuring flawless presentation and intuitive navigation across every device from mobile phones to high-resolution desktop displays.",
    features: ["Mobile-First Approach", "Fluid Fluid Grid & Clamp Layouts", "Touch-Friendly Interactions"]
  },
  {
    id: "performance-seo",
    icon: "Zap",
    title: "Performance & SEO",
    description: "Optimizing Core Web Vitals, page loading speed, asset compression, and search engine discoverability.",
    features: ["Fast Largest Contentful Paint (LCP)", "Semantic HTML5 Markup", "Lightweight Bundle Footprint"]
  },
  {
    id: "ui-ux-prototyping",
    icon: "Palette",
    title: "Creative Prototyping",
    description: "Creating interactive prototypes, dynamic theme switchers, dark mode engines, and immersive visual storytelling.",
    features: ["Custom Theme Palettes", "Dark & Light Mode Systems", "Accessible Contrast Standards"]
  },
  {
    id: "maintenance-refactor",
    icon: "Sparkles",
    title: "Code Refactoring",
    description: "Modernizing legacy static HTML/CSS websites into scalable modern single-page web applications with clean architecture.",
    features: ["Modern Tooling Integration", "Code Cleanup & Optimization", "Future-Proof Codebase"]
  }
];

export const projects = [
  {
    id: "project-1",
    title: "Modern React Portfolio Experience",
    category: "React & Web Apps",
    image: "/images/hero1.jpg",
    description: "A flagship interactive developer portfolio built with Vite, React, and custom CSS tokens. Features dynamic color switching, dark mode, smooth scrolling, and responsive layouts.",
    tags: ["React 19", "Vite", "Vanilla CSS", "Responsive"],
    githubUrl: "https://github.com/Nagendra061/Personal-portfolio",
    liveUrl: "https://github.com/Nagendra061/Personal-portfolio"
  },
  {
    id: "project-2",
    title: "Creative Agency & UI Showcase",
    category: "UI/UX Design",
    image: "/images/hero2.png",
    description: "A visually captivating concept site featuring glassmorphism cards, dynamic grid alignment, fluid typography, and subtle micro-interactions.",
    tags: ["React", "UI/UX", "Glassmorphism", "CSS Grid"],
    githubUrl: "https://github.com/Nagendra061",
    liveUrl: "https://github.com/Nagendra061"
  },
  {
    id: "project-3",
    title: "Developer Metrics & Analytics UI",
    category: "React & Web Apps",
    image: "/images/hero3.jpg",
    description: "An intuitive dashboard visualizing project metrics, development timelines, and interactive status widgets with full dark mode support.",
    tags: ["React", "Dashboard", "Modern UI", "Interactive"],
    githubUrl: "https://github.com/Nagendra061",
    liveUrl: "https://github.com/Nagendra061"
  },
  {
    id: "project-4",
    title: "Digital Pro Max Tech Portal",
    category: "Creative",
    image: "/images/hero4.jpg",
    description: "A publication hub and technical resource portal crafted with responsive grid layouts, card elevations, and optimized reading modes.",
    tags: ["Frontend", "SEO", "Responsive", "Web Design"],
    githubUrl: "https://github.com/Nagendra061",
    liveUrl: "https://digitalpromax.blogspot.com"
  },
  {
    id: "project-5",
    title: "Interactive Web Application Hub",
    category: "React & Web Apps",
    image: "/images/hero1.jpg",
    description: "Modern single-page application framework showcasing interactive state management, custom modal dialogs, and instant search filtering.",
    tags: ["React", "SPA", "Component Architecture", "Vite"],
    githubUrl: "https://github.com/Nagendra061",
    liveUrl: "https://github.com/Nagendra061"
  },
  {
    id: "project-6",
    title: "Design System & Component Library",
    category: "UI/UX Design",
    image: "/images/hero4.jpg",
    description: "A robust collection of accessible, responsive UI primitives including custom buttons, timeline trees, form controls, and theme switchers.",
    tags: ["Design System", "A11y", "CSS Custom Properties", "Tokens"],
    githubUrl: "https://github.com/Nagendra061",
    liveUrl: "https://github.com/Nagendra061"
  }
];

export const themeColors = [
  { id: "crimson", name: "Crimson Red", hex: "#ec1839", class: "theme-crimson" },
  { id: "orange", name: "Neon Orange", hex: "#fa5b0f", class: "theme-orange" },
  { id: "emerald", name: "Emerald Green", hex: "#10b981", class: "theme-emerald" },
  { id: "cyan", name: "Electric Cyan", hex: "#06b6d4", class: "theme-cyan" },
  { id: "violet", name: "Vivid Violet", hex: "#8b5cf6", class: "theme-violet" }
];

export const experience = {
  company: "STARTWITH BASICX PVT. LTD.",
  role: "Associate Software Engineer",
  duration: "May 2024 - Present",
  location: "Jaipur, India",
  workDone: [
    "Built a Meal Planning platform serving 1,000+ users, featuring multilingual support, secure authentication, and seamless payment integration.",
    "Developed a comprehensive sports management platform streamlining tournaments, registrations, player and team management, scheduling, results, analytics, within a single unified dashboard.",
    "Architected a jewelry e-commerce platform using Next.js (SSR), Razorpay integration, Strapi CMS, and Zustand, improving rendering efficiency and achieving 30% faster page loads.",
    "Developed a document processing application using React, Python-based LLM integration, Node.js, and RabbitMQ for queue-based asynchronous processing, implementing split-view analysis and dynamic form conversion to reduce processing time by 70%.",
  ],
  techStack:
    "Next.js, React.js, TypeScript, Node.js, MySQL, Strapi CMS, Zustand, RabbitMQ, AWS, Tailwind CSS, Shadcn UI",
  logo: "/icons/companies/basicx.png",
  link: "https://basicx.com",
};

export const stack = [
  { name: "TypeScript", icon: "/icons/stack/ts.svg" },
  { name: "JavaScript", icon: "/icons/stack/js.svg" },
  { name: "React.js", icon: "/icons/stack/react.svg" },
  { name: "Next.js", icon: "/icons/stack/next.svg", monochrome: true },
  { name: "Node.js", icon: "/icons/stack/node.svg" },
  { name: "MongoDB", icon: "/icons/stack/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/stack/postgres.svg" },
  { name: "Docker", icon: "/icons/stack/docker.svg" },
  { name: "Tailwind", icon: "/icons/stack/tailwind.svg" },
  { name: "Firebase", icon: "/icons/stack/firebase.svg" },
  { name: "Prisma", icon: "/icons/stack/prisma.svg", monochrome: true },
  { name: "Better Auth", icon: "/icons/stack/better-auth.svg", monochrome: true },
  { name: "Vercel AI SDK", icon: "/icons/stack/vercel.svg", monochrome: true },
  { name: "Git", icon: "/icons/stack/git.svg" },
  { name: "Zustand", icon: "/icons/stack/zustand.svg" },
  { name: "MySQL", icon: "/icons/stack/mysql.svg" },
  { name: "RabbitMQ", icon: "/icons/stack/rabbitmq.svg" },
  { name: "Shadcn UI", icon: "/icons/stack/shadcn.svg", monochrome: true },
  { name: "AWS", icon: "/icons/stack/aws.svg", monochrome: true },
  { name: "Strapi", icon: "/icons/stack/strapi.svg" },
  { name: "Clerk", icon: "/icons/stack/clerk.svg" },
];

export const projects = [
  {
    title: "Synapse - AI Workspace Platform",
    href: "https://synapse.ritikgupta.in",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Vercel AI SDK",
    ],
    githubLink: "https://github.com/Ritikgupta856/ai-workspace",
    image: "/images/projects/synapse.png",
    description:
      "An AI-powered multi-workspace platform for collaborative projects, tasks, notes, and documents, featuring a context-aware assistant with tool calling across workspace resources and a RAG-ready architecture.",
    highlights: [
      "Built an AI-powered multi-workspace platform for collaborative projects, tasks, notes, and documents.",
      "Developed a context-aware AI assistant with tool calling across workspace resources and a RAG-ready architecture.",
      "Implemented secure multi-tenant authentication, RBAC, and workspace invitation workflows.",
      "Designed a modular integration framework for scalable AI and third-party service integrations.",
      "Integrated Dodo Payments for subscription billing, including checkout, plan management, and webhook handling.",
    ],
    year: "2026",
  },
  {
    title: "Wanderly - Homestay Marketplace",
    href: "https://wanderly.ritikgupta.in",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/wanderly-marketplace",
    image: "/images/projects/wanderly.png",
    description:
      "A responsive online homestay marketplace built with Next.js 16, integrating secure NextAuth authentication and a MongoDB/Prisma database. It features modern UI design using Tailwind CSS and robust error handling via TypeScript, resulting in 30% faster query times.",
    highlights: [
      "Developed a responsive online homestay marketplace using Next.js 16 with Tailwind CSS for modern UI design.",
      "Utilized TypeScript to improve code quality and enable early error detection.",
      "Implemented secure authentication using NextAuth for data integrity and privacy.",
      "Optimized performance with Prisma ORM and MongoDB, reducing query time by 30%.",
    ],
    year: "2023",
  },
  {
    title: "ShopCart - E-Commerce Platform",
    href: "https://shopcart.ritikgupta.in",
    tags: ["React.js", "Node.js", "MongoDB", "Zustand", "Tailwind", "AWS"],
    githubLink: "https://github.com/Ritikgupta856/shopcart-store",
    image: "/images/projects/shopcart.png",
    description:
      "A full-stack eCommerce platform featuring a smooth React.js frontend, Zustand global state, and a highly available Node.js/MongoDB backend. Deployed on AWS EC2, the platform integrates Stripe for payments, boosting transaction success rates significantly.",
    highlights: [
      "Built a responsive eCommerce platform using React.js and Tailwind CSS for intuitive UI.",
      "Developed a scalable backend with Node.js, Express.js, and MongoDB.",
      "Integrated Stripe for secure payments, increasing transaction success by 20%.",
      "Used Zustand for efficient global state management, reducing re-renders by 25%.",
      "Deployed backend on AWS EC2 with Nginx and SSL, maintaining 99.9% uptime.",
    ],
  },
  {
    title: "ChatSpark - Real-Time Messaging",
    href: "https://chatspark.ritikgupta.in",
    tags: ["React.js", "Firebase", "Shadcn UI", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/chatspark-realtime-chat",
    image: "/images/projects/chatspark.png",
    description:
      "An interactive, real-time messaging application powered by React and Firebase. It offers secure authentication flows, customizable user profiles, and an optimized chat experience that brought a 30% increase in user engagement.",
    highlights: [
      "Developed a real-time chat app with React and Firebase for instant communication.",
      "Integrated secure login, registration, and password reset functionalities.",
      "Enhanced engagement with interactive profiles and customization options.",
      "Achieved 30% higher user engagement through optimized chat performance.",
    ],
  },
  {
    title: "ShopCart - Admin Dashboard",
    href: "https://scms.ritikgupta.in",
    tags: ["React.js", "Clerk", "Shadcn UI", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/shopcart-admin-dashboard",
    image: "/images/projects/shopcart-admin.png",
    description:
      "A comprehensive CMS dashboard designed to streamline product, order, and content management. It ensures robust access control via Clerk authentication and utilizes Shadcn UI components for a consistent, accessible user experience.",
    highlights: [
      "Built an admin CMS dashboard for product, order, and content management.",
      "Implemented secure authentication and access control with Clerk.",
      "Streamlined operations with reusable components using Shadcn UI and Tailwind.",
    ],
  },
];

export const blogs = [
  {
    slug: "debouncing-in-react",
    title: "Understanding Debouncing in React",
    description:
      "Learn how debouncing works in React and how it helps reduce unnecessary API calls, improving performance and user experience.",
    date: "2026-03-11",
    coverImage: "/images/blogs/debouncing.png",
    tags: ["React", "Performance", "Frontend"],
    author: "Ritik Gupta",
    readingTime: "6 min read",
    featured: true,
    published: true,
  },
];

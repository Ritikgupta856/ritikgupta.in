export const experience = {
  company: "StartWith BasicX",
  role: "Software Engineer",
  duration: "May 2024 – Present",
  location: "Jaipur, India",
  workDone: [
    "Built a meal-planning application serving 1,000+ active users with React.js, TypeScript, and Node.js, including multi-language support (i18n), payment integration, and JWT-authenticated REST APIs.",
    "Engineered a multi-organization admin dashboard (React.js, Node.js, MySQL) for member administration, tournaments, financial settlements, and subscriptions.",
    "Architected a jewelry e-commerce platform on Next.js with server-side rendering, headless Strapi CMS, Razorpay payments, and Zustand state management, achieving 30% faster page loads.",
    "Designed an on-demand image transformation service on AWS CloudFront, Lambda, and S3 that resizes, converts, and filters images through URL parameters, with edge caching to reduce origin load.",
    "Migrated 10,000+ documents and images to AWS S3 through an event-driven Inngest pipeline with step-level retries and controlled concurrency, creating a media record for every asset.",
    "Built a support-agent console for handling WhatsApp conversations and support tickets, connecting application APIs to n8n webhooks.",
    "Automated deployments with GitHub Actions CI/CD pipelines that ship Docker containers to AWS EC2 behind Nginx reverse proxies.",
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
  {
    name: "Better Auth",
    icon: "/icons/stack/better-auth.svg",
    monochrome: true,
  },
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

export function getTechIcon(techName) {
  const searchName = techName.toLowerCase().trim();
  let matched = stack.find((s) => s.name.toLowerCase() === searchName);
  if (!matched) {
    matched = stack.find(
      (s) =>
        searchName.includes(s.name.toLowerCase()) ||
        s.name.toLowerCase().includes(searchName),
    );
  }
  return matched || null;
}

export const projects = [
  {
    title: "Synapse — AI Workspace Platform",
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
      "Multi-workspace platform for projects, tasks, notes and docs, with an AI assistant that uses tool calling across workspace data. Includes RBAC, invitations and subscription billing.",
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
    title: "Wanderly — Homestay Marketplace",
    href: "https://wanderly.ritikgupta.in",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/wanderly-marketplace",
    image: "/images/projects/wanderly.png",
    description:
      "Homestay marketplace built with Next.js, with NextAuth authentication and a Prisma + MongoDB data layer.",
    highlights: [
      "Developed a responsive online homestay marketplace using Next.js 16 with Tailwind CSS for modern UI design.",
      "Utilized TypeScript to improve code quality and enable early error detection.",
      "Implemented secure authentication using NextAuth for data integrity and privacy.",
      "Optimized performance with Prisma ORM and MongoDB, reducing query time by 30%.",
    ],
    year: "2023",
  },
  {
    title: "ShopCart — E-Commerce Store",
    href: "https://shopcart.ritikgupta.in",
    tags: ["React.js", "Node.js", "MongoDB", "Zustand", "Tailwind", "AWS"],
    githubLink: "https://github.com/Ritikgupta856/shopcart-store",
    image: "/images/projects/shopcart.png",
    description:
      "Full-stack store with Stripe payments, a React + Zustand frontend and a Node.js/MongoDB backend deployed on AWS EC2 behind Nginx.",
    highlights: [
      "Built a responsive eCommerce platform using React.js and Tailwind CSS for intuitive UI.",
      "Developed a scalable backend with Node.js, Express.js, and MongoDB.",
      "Integrated Stripe for secure payments, increasing transaction success by 20%.",
      "Used Zustand for efficient global state management, reducing re-renders by 25%.",
      "Deployed backend on AWS EC2 with Nginx and SSL, maintaining 99.9% uptime.",
    ],
  },
  {
    title: "ChatSpark — Real-Time Messaging",
    href: "https://chatspark.ritikgupta.in",
    tags: ["React.js", "Firebase", "Shadcn UI", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/chatspark-realtime-chat",
    image: "/images/projects/chatspark.png",
    description:
      "Real-time chat app on React and Firebase, with sign-up, password reset and customizable user profiles.",
    highlights: [
      "Developed a real-time chat app with React and Firebase for instant communication.",
      "Integrated secure login, registration, and password reset functionalities.",
      "Enhanced engagement with interactive profiles and customization options.",
      "Achieved 30% higher user engagement through optimized chat performance.",
    ],
  },
  {
    title: "ShopCart — Admin Dashboard",
    href: "https://scms.ritikgupta.in",
    tags: ["React.js", "Clerk", "Shadcn UI", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/shopcart-admin-dashboard",
    image: "/images/projects/shopcart-admin.png",
    description:
      "Admin dashboard for ShopCart's products, orders and content, with Clerk authentication and access control.",
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

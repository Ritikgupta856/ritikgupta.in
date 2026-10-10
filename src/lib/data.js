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
  { name: "Next.js", icon: "/icons/stack/next.svg" },
  { name: "Node.js", icon: "/icons/stack/node.svg" },
  { name: "MongoDB", icon: "/icons/stack/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/stack/postgres.svg" },
  { name: "Docker", icon: "/icons/stack/docker.svg" },
  { name: "Tailwind", icon: "/icons/stack/tailwind.svg" },
  { name: "Firebase", icon: "/icons/stack/firebase.svg" },
  { name: "Prisma", icon: "/icons/stack/prisma.svg" },
  { name: "Better Auth", icon: "/icons/stack/better-auth.svg" },
  { name: "Vercel AI SDK", icon: "/icons/stack/vercel.svg" },
  { name: "Git", icon: "/icons/stack/git.svg" },
  { name: "Zustand", icon: "/icons/stack/zustand.svg" },
  { name: "MySQL", icon: "/icons/stack/mysql.svg" },
  { name: "RabbitMQ", icon: "/icons/stack/rabbitmq.svg" },
  { name: "Shadcn UI", icon: "/icons/stack/shadcn.svg" },
  { name: "AWS", icon: "/icons/stack/aws.svg" },
  { name: "Strapi", icon: "/icons/stack/strapi.svg" },
  { name: "Express.js", icon: "/icons/stack/express.svg" },
  { name: "Nginx", icon: "/icons/stack/nginx.svg" },
  { name: "GitHub", icon: "/icons/stack/github.svg" },
  { name: "CI/CD", icon: "/icons/stack/github-actions.svg" },
];

export const stackCategories = [
  {
    label: "Languages",
    tools: ["JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    tools: ["React.js", "Next.js", "Zustand", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    tools: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "Better Auth",
      "RabbitMQ",
      "Vercel AI SDK",
    ],
  },
  {
    label: "Databases",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    tools: ["AWS", "Docker", "Nginx", "Git", "GitHub", "CI/CD"],
  },
];

const normalize = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");

export function getTechIcon(techName) {
  const searchName = normalize(techName);
  let matched = stack.find((s) => normalize(s.name) === searchName);
  if (!matched) {
    matched = stack.find(
      (s) =>
        searchName.includes(normalize(s.name)) ||
        normalize(s.name).includes(searchName),
    );
  }
  return matched || null;
}

export const projects = [
  {
    title: "Synapse",
    category: "AI Workspace Platform",
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
    image: "/images/projects/synapse.webp",
    description:
      "A shared workspace for projects, tasks, notes and documents, with an AI assistant that can search and act across all of them.",
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
    title: "Wanderly",
    category: "Homestay Marketplace",
    href: "https://wanderly.ritikgupta.in",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/wanderly-marketplace",
    image: "/images/projects/wanderly.webp",
    description:
      "A homestay marketplace where travellers browse, book and review stays, and hosts manage their own listings.",
    highlights: [
      "Developed a responsive online homestay marketplace using Next.js 16 with Tailwind CSS for modern UI design.",
      "Utilized TypeScript to improve code quality and enable early error detection.",
      "Implemented secure authentication using NextAuth for data integrity and privacy.",
      "Optimized performance with Prisma ORM and MongoDB, reducing query time by 30%.",
    ],
    year: "2023",
  },
  {
    title: "ShopCart",
    category: "E-Commerce Store",
    href: "https://shopcart.ritikgupta.in",
    tags: ["React.js", "Node.js", "MongoDB", "Zustand", "Tailwind", "AWS"],
    githubLink: "https://github.com/Ritikgupta856/shopcart-store",
    image: "/images/projects/shopcart.webp",
    description:
      "An online store with product browsing, a persistent cart and secure checkout.",
    highlights: [
      "Built a responsive eCommerce platform using React.js and Tailwind CSS for intuitive UI.",
      "Developed a scalable backend with Node.js, Express.js, and MongoDB.",
      "Integrated Stripe for secure payments, increasing transaction success by 20%.",
      "Used Zustand for efficient global state management, reducing re-renders by 25%.",
      "Deployed backend on AWS EC2 with Nginx and SSL, maintaining 99.9% uptime.",
    ],
  },
  {
    title: "ChatSpark",
    category: "Real-Time Messaging",
    href: "https://chatspark.ritikgupta.in",
    tags: ["React.js", "Firebase", "Shadcn UI", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/chatspark-realtime-chat",
    image: "/images/projects/chatspark.webp",
    description:
      "A chat app for one-to-one conversations that arrive instantly, with accounts and customizable profiles.",
    highlights: [
      "Developed a real-time chat app with React and Firebase for instant communication.",
      "Integrated secure login, registration, and password reset functionalities.",
      "Enhanced engagement with interactive profiles and customization options.",
      "Achieved 30% higher user engagement through optimized chat performance.",
    ],
  },
  {
    title: "ShopCart Admin",
    category: "E-Commerce CMS",
    href: "https://scms.ritikgupta.in",
    tags: ["React.js", "Shadcn UI", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/shopcart-admin-dashboard",
    image: "/images/projects/shopcart-admin.webp",
    description:
      "The dashboard behind ShopCart, where the team manages products, orders, customers and store content.",
    highlights: [
      "Built an admin CMS dashboard for product, order, and content management.",
      "Implemented secure authentication and access control.",
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

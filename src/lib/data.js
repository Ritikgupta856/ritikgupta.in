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
  { name: "TypeScript", icon: "/icons/stack/ts.png" },
  { name: "JavaScript", icon: "/icons/stack/js.png" },
  { name: "React.js", icon: "/icons/stack/react.png" },
  { name: "Next.js", icon: "/icons/stack/next.png" },
  { name: "Node.js", icon: "/icons/stack/node.png" },
  { name: "MongoDB", icon: "/icons/stack/mongodb.png" },
  { name: "PostgreSQL", icon: "/icons/stack/postgres.png" },
  { name: "Docker", icon: "/icons/stack/docker.png" },
  { name: "Tailwind", icon: "/icons/stack/tailwind.png" },
  { name: "Firebase", icon: "/icons/stack/firebase.png" },
  { name: "Prisma", icon: "/icons/stack/prisma.png" },
  { name: "Git", icon: "/icons/stack/git.png" },
  { name: "Zustand", icon: "/icons/stack/zustand.png" },
  { name: "MySQL", icon: "/icons/stack/mysql.png" },
  { name: "RabbitMQ", icon: "/icons/stack/rabbitmq.png" },
  { name: "Shadcn UI", icon: "/icons/stack/shadcn.png" },
  { name: "AWS", icon: "/icons/stack/aws.png" },
  { name: "Strapi", icon: "/icons/stack/strapi.png" },
  { name: "Clerk", icon: "/icons/stack/clerk.png" },
];

export const projects = [
  {
    title: "Wanderly - Homestay Marketplace",
    href: "https://wanderly.ritikgupta.in",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Ritikgupta856/wanderly-marketplace",
    image: "/images/projects/wanderly.png",
    description:
      "A responsive online homestay marketplace built with Next.js 14, integrating secure NextAuth authentication and a MongoDB/Prisma database. It features modern UI design using Tailwind CSS and robust error handling via TypeScript, resulting in 30% faster query times.",
    highlights: [
      "Developed a responsive online homestay marketplace using Next.js 14 with Tailwind CSS for modern UI design.",
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
    date: "2026-02-22",
    coverImage: "/images/blogs/debouncing.png",
    tags: ["React", "Performance", "Frontend"],
    author: "Ritik Gupta",
    readingTime: "5 min read",
    featured: true,
    published: true,
  },
];

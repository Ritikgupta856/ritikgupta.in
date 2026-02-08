"use client";
import { m, motion } from "framer-motion";
import Image from "next/image";
import Heading from "./Heading";

const skills = [
  { name: "TypeScript", icon: "/stack/ts.png" },
  { name: "JavaScript", icon: "/stack/js.png" },
  { name: "React.js", icon: "/stack/react.png" },
  { name: "Next.js", icon: "/stack/next.png" },
  { name: "Node.js", icon: "/stack/node.png" },
  { name: "MongoDB", icon: "/stack/mongodb.png" },
  { name: "PostgreSQL", icon: "/stack/postgres.png" },
  { name: "Docker", icon: "/stack/docker.png" },
  { name: "Tailwind", icon: "/stack/tailwind.png" },
  { name: "Firebase", icon: "/stack/firebase.png" },
  { name: "Prisma", icon: "/stack/prisma.png" },
  { name: "Git", icon: "/stack/git.png" },
  {name:"MySQL", icon:"/stack/mysql.png"},
  {name:"RabbitMQ", icon:"/stack/rabbitmq.png"},
  {name:"shadcn/ui", icon:"/stack/shadcn.png"},

];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Stack() {
  return (
    <section id="stack" className="w-full border-x border-zinc-200 dark:border-zinc-800 font-mono">
   

    <Heading heading="Stack" />

      {/* Icon Grid Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="p-8 bg-white dark:bg-zinc-950"
      >
        <div className="flex flex-wrap gap-x-8 gap-y-10 items-center justify-start">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
              className="relative group cursor-pointer"
            >
              <div className="size-10 md:size-12 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={44}
                  height={44}
                  className="object-contain transition-all duration-300"
                />
              </div>
              
              {/* Tooltip on hover */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] bg-zinc-900 text-white px-2 py-0.5 rounded transition-opacity pointer-events-none whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
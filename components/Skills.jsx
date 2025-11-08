"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Heading from "./Heading";

const skills = [
  { name: "React.js" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
  { name: "Tailwind" },
  { name: "Firebase" },
  { name: "Supabase" },
  { name: "Zustand" },
  { name: "C++" },
  { name: "Rabbitmq" },
  { name: "Docker" },
];

export default function Skills() {
  return (
    <section id="skills">
      <Heading heading="Skills" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-block"
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-3 py-1.5 font-medium transition-all duration-200 hover:shadow-md"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

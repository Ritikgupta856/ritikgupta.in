"use client";
import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import Image from "next/image";
import Heading from "./Heading";

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

export default function Stack() {
  return (
    <section id="stack" className="w-full font-sans scroll-mt-24">
      <Heading
        title="Technology Stack"
        subtitle="The tools and technologies I use to bring ideas to life."
      />

      <div className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-sm">
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.05 }}
        >
          {stack.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={tagVariants}
                whileHover="hover"
                className="group relative flex items-center justify-center size-14 md:size-16 bg-muted hover:bg-background rounded-2xl border border-border hover:border-foreground/20 hover:shadow-md transition-all cursor-pointer"
              >
                {/* Icon */}
                {Icon ? (
                  typeof Icon === "string" ? (
                    <div className="relative size-7 md:size-8 transition-transform duration-300 group-hover:scale-110">
                      <Image src={Icon} alt={skill.name} fill className="object-contain" />
                    </div>
                  ) : (
                    <Icon className="size-7 md:size-8 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                  )
                ) : (
                  <div className="size-5 rounded-full bg-foreground/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/50" />
                )}

                {/* Hover Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-xl">
                  {skill.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                </div>

                {/* Subtle gradient glow effect on absolute hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 pointer-events-none transition-colors" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
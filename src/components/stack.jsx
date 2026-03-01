"use client";
import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import Image from "next/image";
import Heading from "./heading";

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export default function Stack() {
  return (
    <section id="stack" className="w-full scroll-mt-24 font-sans">
      <Heading
        title="Technology Stack"
        subtitle="The tools and technologies I use to bring ideas to life."
      />

      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:justify-start md:gap-5"
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
                className="group relative flex size-14 cursor-pointer items-center justify-center rounded-2xl border border-border bg-muted transition-all hover:border-foreground/20 hover:bg-background hover:shadow-md md:size-16"
              >
                {Icon ? (
                  typeof Icon === "string" ? (
                    <div className="relative size-7 transition-transform duration-300 group-hover:scale-110 md:size-8">
                      <Image
                        src={Icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <Icon className="size-7 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary md:size-8" />
                  )
                ) : (
                  <div className="size-5 rounded-full bg-foreground/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/50" />
                )}

                <div className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                  {skill.name}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 transition-colors group-hover:from-blue-500/10 group-hover:to-cyan-500/10" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import Image from "next/image";
import Heading from "./heading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
              <TooltipProvider key={index} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
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

                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 transition-colors group-hover:from-blue-500/10 group-hover:to-cyan-500/10" />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-foreground text-background"
                  >
                    <p className="text-xs font-semibold">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

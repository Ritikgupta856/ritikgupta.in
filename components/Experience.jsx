"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Heading from "./Heading";
import { experienceData } from "@/lib/data";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work-experience">
      <Heading heading="Work Experience" />

      <div className="flex min-h-0 flex-col gap-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-lg py-4 transition-all hover:border-violet-500/30 dark:hover:border-violet-400/30 group">
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="relative flex shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700 size-12 bg-white dark:bg-zinc-800">
                  <img
                    alt={experienceData.company}
                    src={experienceData.logo}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-foreground">
                      {experienceData.company}
                    </h3>

                    <button
                      onClick={() => setExpanded((prev) => !prev)}
                      aria-label="Toggle details"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <motion.div
                        animate={{ rotate: expanded ? 90 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <ChevronRight className="h-4 w-4 text-zinc-500" />
                      </motion.div>
                    </button>
                  </div>

                  <div className="text-xs text-muted-foreground shrink-0">
                    {experienceData.duration}
                  </div>
                </div>

                <div className="text-xs font-medium text-foreground mb-0.5">
                  {experienceData.role}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {experienceData.location}
                </div>
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    expanded
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <ul className="space-y-3 mb-4">
                      {experienceData.workDone.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-violet-500 dark:text-violet-400 mt-1 flex-shrink-0">
                            •
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-xs">
                      <p className="font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Tech Stack
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {experienceData.techStack}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

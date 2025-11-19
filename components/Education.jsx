"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education">
      <div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Heading heading="Education" />
      </div>

      <div className="relative space-y-6 md:space-y-8">
        <div className="flex min-h-0 flex-col gap-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="rounded-lg transition-all hover:border-violet-500/30 dark:hover:border-violet-400/30">
                <div className="flex gap-4">
                  <div className="flex-none">
                    <div className="relative shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700 size-12 bg-white dark:bg-zinc-800 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.org}
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className="font-bold text-sm text-foreground">
                        {item.org}
                      </h3>
                      <div className="text-xs text-muted-foreground shrink-0">
                        {item.period}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
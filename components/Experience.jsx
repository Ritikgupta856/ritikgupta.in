"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Calendar } from "lucide-react";
import Heading from "./Heading";
import { experienceData } from "@/lib/data";

export default function Experience() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="experience" className="w-full border-x border-zinc-200 dark:border-zinc-800 font-mono">
      <Heading heading="Experience" />

      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 md:p-8 group"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Company Logo - Rounded border style from Hero */}
            <div className="flex-none">
              <div className="relative shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 size-14 bg-zinc-50 dark:bg-zinc-900 p-1">
                <img
                  alt={experienceData.company ?? "company logo"}
                  src={experienceData.logo}
                  className="aspect-square h-full w-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Experience Content */}
            <div className="flex-grow space-y-3">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {experienceData.company}
                    </h3>
                    <button
                      onClick={() => setExpanded((prev) => !prev)}
                      className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors"
                    >
                      <motion.div
                        animate={{ rotate: expanded ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <ChevronRight className="h-4 w-4 text-zinc-400" />
                      </motion.div>
                    </button>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                    {experienceData.role}
                  </p>
                </div>

                {/* Meta Info: Time and Location */}
                <div className="flex flex-col md:items-end text-xs space-y-1 text-zinc-400 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-zinc-300 dark:text-zinc-700" />
                    <span>{experienceData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-zinc-300 dark:text-zinc-700" />
                    <span>{experienceData.location}</span>
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <ul className="space-y-4 mb-6">
                    {experienceData.workDone.map((point, i) => (
                      <li key={i} className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="text-zinc-300 dark:text-zinc-700 font-bold">//</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Footer */}
                  <div className="bg-zinc-50/50 dark:bg-zinc-900/30 p-4 border border-zinc-100 dark:border-zinc-900 rounded-lg">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                      Technologies used
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {experienceData.techStack}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
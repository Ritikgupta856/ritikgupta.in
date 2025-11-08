"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Heading from "./Heading";

const experienceData = {
  company: "STARTWITH BASICX PVT. LTD.",
  role: "Associate Software Engineer",
  duration: "May 2024 - Present",
  location: "Jaipur, India",
  achievements: [
    "Built MealMate Scheduler with React/Node.js and payment integration.",
    "Developed Invoice Extractor with drag-and-drop upload and secure auth.",
    "Created full-stack sports management platform on AWS with responsive UI.",
  ],
  techStack:
    "React.js, TypeScript, Node.js, MSSQL, MariaDB, Shadcn UI, Tailwind CSS, AWS EC2/Amplify",
  logo: "/icons/basicx.png",
  link: "https://basicx.com",
};

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work-experience">
      <Heading heading="Work Experience" />

      <div className="flex min-h-0 flex-col gap-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-lg bg-card text-card-foreground flex p-3 transition hover:shadow-md group cursor-pointer">
            {/* Logo */}
            <div className="flex-none">
              <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted dark:bg-foreground">
                <img
                  alt={experienceData.company}
                  src={experienceData.logo}
                  className="aspect-square h-full w-full object-contain"
                />
              </span>
            </div>

            {/* Main content */}
            <div className="flex-grow ml-4 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <div className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
                  {experienceData.company}

                  {/* Chevron appears on hover and toggles details */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded((prev) => !prev);
                    }}
                    aria-label="Toggle details"
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.span
                      animate={{ rotate: expanded ? 90 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <ChevronRight className="h-4 w-4 text-zinc-600" />
                    </motion.span>
                  </button>
                </div>

                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {experienceData.duration}
                </div>
              </div>

              <div className="font-sans text-xs">{experienceData.role}</div>
              <div className="text-[10px] text-muted-foreground">
                {experienceData.location}
              </div>

              {/* Expandable details */}
              <motion.div
                className="mt-3 text-xs sm:text-sm text-muted-foreground overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ height: { duration: 0.35 }, opacity: { duration: 0.2 } }}
              >
                <div className="pt-2">
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {experienceData.achievements.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-3 text-[11px] text-zinc-500">
                    <strong>Tech Stack:</strong> {experienceData.techStack}
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

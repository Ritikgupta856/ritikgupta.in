"use client";

import { motion } from "framer-motion";
import { experience, stack } from "@/lib/data";
import Heading from "./Heading";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
});

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
  viewport: { once: true },
};

const listItem = {
  initial: { opacity: 0, x: -8 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const techItem = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export default function Experience() {
  const techs = experience.techStack.split(", ");

  const getTechIcon = (techName) => {
    const searchName = techName.toLowerCase().trim();
    // try exact match first
    let matched = stack.find((s) => s.name.toLowerCase() === searchName);

    // if not found, try partial match (e.g. "Tailwind CSS" matches "Tailwind")
    if (!matched) {
      matched = stack.find(
        (s) =>
          searchName.includes(s.name.toLowerCase()) ||
          s.name.toLowerCase().includes(searchName),
      );
    }
    return matched ? matched.icon : null;
  };

  return (
    <section id="experience" className="w-full scroll-mt-24 font-sans">
      <Heading
        title="Work Experience"
        subtitle="A track record of driving innovation and results through software."
      />

      <motion.div {...fadeUp()} className="mt-8 w-full">
        <div className="flex flex-col gap-6">
          {/* Top Section: Logo, Company, Role, Date, Location */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div className="flex items-start gap-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                className="mt-1 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-black sm:size-14 dark:bg-white"
              >
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="size-full object-cover"
                />
              </motion.div>

              {/* Company & Role */}
              <div className="mt-0.5 flex flex-col sm:mt-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-[17px] font-bold tracking-tight text-foreground sm:text-xl">
                    {experience.company}
                  </h3>

                  {/* Status Pill */}
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 sm:px-2.5 sm:py-1 sm:text-[11px] dark:text-emerald-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Working
                  </span>
                </div>
                <p className="mt-0.5 text-[13px] font-medium text-muted-foreground sm:text-[15px]">
                  {experience.role}
                </p>
              </div>
            </div>

            {/* Date & Location */}
            <div className="-mt-2 flex flex-col pl-[4.0rem] text-[12px] font-medium text-muted-foreground/80 sm:pl-[4.5rem] sm:text-sm md:mt-1.5 md:items-end md:pl-0">
              <p>{experience.duration}</p>
              <p>{experience.location}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-2 flex flex-col gap-3 sm:mt-4">
            <motion.h4
              {...fadeUp(0.1)}
              className="text-[14px] font-bold text-foreground sm:text-[15px]"
            >
              Technologies & Tools
            </motion.h4>
            <motion.div
              variants={{
                initial: {},
                whileInView: {
                  transition: { staggerChildren: 0.04, delayChildren: 0.1 },
                },
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2.5"
            >
              {techs.map((tech, i) => {
                const icon = getTechIcon(tech);
                return (
                  <motion.div
                    key={i}
                    variants={techItem}
                    whileHover={{ y: -1.5, transition: { duration: 0.15 } }}
                    className="flex cursor-default select-none items-center gap-1.5 rounded-[10px] border border-dashed border-border/80 bg-muted/40 px-2.5 py-1.5 text-[11px] font-semibold text-foreground shadow-sm transition-colors hover:bg-muted/60 sm:gap-2 sm:rounded-xl sm:px-3 sm:text-xs dark:bg-muted/10 dark:hover:bg-muted/30"
                  >
                    {icon ? (
                      <img
                        src={icon}
                        alt={tech}
                        className="size-3.5 object-contain"
                      />
                    ) : (
                      <div className="mx-0.5 size-1.5 rounded-full bg-foreground/30" />
                    )}
                    {tech}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Work done */}
          <motion.ul
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-2 space-y-2.5 sm:mt-4"
          >
            {experience.workDone.map((point, i) => (
              <motion.li
                key={i}
                variants={listItem}
                className="flex items-start text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]"
              >
                <div className="mr-3 mt-[0.6em] h-1 w-1 shrink-0 bg-muted-foreground/40 sm:h-1.5 sm:w-1.5" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}

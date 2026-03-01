"use client";

import { motion } from "framer-motion";
import { experienceData, stack } from "@/lib/data";
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
  const techs = experienceData.techStack.split(", ");

  const getTechIcon = (techName) => {
    const searchName = techName.toLowerCase().trim();
    // try exact match first
    let matched = stack.find((s) => s.name.toLowerCase() === searchName);

    // if not found, try partial match (e.g. "Tailwind CSS" matches "Tailwind")
    if (!matched) {
      matched = stack.find((s) => searchName.includes(s.name.toLowerCase()) || s.name.toLowerCase().includes(searchName));
    }
    return matched ? matched.icon : null;
  };

  return (
    <section id="experience" className="w-full font-sans scroll-mt-24">
      <Heading
        title="Work Experience"
        subtitle="A track record of driving innovation and results through software."
      />

      <motion.div
        {...fadeUp()}
        className="w-full mt-8"
      >
        <div className="flex flex-col gap-6">

          {/* Top Section: Logo, Company, Role, Date, Location */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex gap-4 items-start">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                className="size-12 sm:size-14 rounded-2xl bg-black dark:bg-white flex items-center justify-center overflow-hidden shrink-0 mt-1"
              >
                <img
                  src={experienceData.logo}
                  alt={experienceData.company}
                  className="size-full object-cover"
                />
              </motion.div>

              {/* Company & Role */}
              <div className="flex flex-col mt-0.5 sm:mt-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-[17px] sm:text-xl font-bold text-foreground tracking-tight">
                    {experienceData.company}
                  </h3>

                  {/* Status Pill */}
                  <span className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-[11px] font-semibold">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Working
                  </span>
                </div>
                <p className="text-[13px] sm:text-[15px] text-muted-foreground font-medium mt-0.5">
                  {experienceData.role}
                </p>
              </div>
            </div>

            {/* Date & Location */}
            <div className="flex flex-col md:items-end text-[12px] sm:text-sm text-muted-foreground/80 font-medium pl-[4.0rem] sm:pl-[4.5rem] md:pl-0 -mt-2 md:mt-1.5">
              <p>{experienceData.duration}</p>
              <p>{experienceData.location}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-col gap-3 mt-2 sm:mt-4">
            <motion.h4
              {...fadeUp(0.1)}
              className="font-bold text-foreground text-[14px] sm:text-[15px]"
            >
              Technologies & Tools
            </motion.h4>
            <motion.div
              variants={{
                initial: {},
                whileInView: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
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
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-muted/40 dark:bg-muted/10 hover:bg-muted/60 dark:hover:bg-muted/30 text-foreground text-[11px] sm:text-xs font-semibold rounded-[10px] sm:rounded-xl border border-border/80 border-dashed cursor-default select-none shadow-sm transition-colors"
                  >
                    {icon ? (
                      <img src={icon} alt={tech} className="size-3.5 object-contain" />
                    ) : (
                      <div className="size-1.5 rounded-full bg-foreground/30 mx-0.5" />
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
            className="space-y-2.5 mt-2 sm:mt-4"
          >
            {experienceData.workDone.map((point, i) => (
              <motion.li
                key={i}
                variants={listItem}
                className="flex items-start text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed"
              >
                <div className="mr-3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-muted-foreground/40 mt-[0.6em] shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </motion.div>
    </section>
  );
}
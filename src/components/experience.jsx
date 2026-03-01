"use client";

import { motion } from "framer-motion";
import { experience, stack } from "@/lib/data";
import Heading from "./heading";

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
    let matched = stack.find((s) => s.name.toLowerCase() === searchName);

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
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div className="flex items-start gap-4">
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

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    {experience.company}
                  </h3>

                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 sm:px-2.5 sm:py-1 sm:text-[11px] dark:text-emerald-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Working
                  </span>
                </div>
                <p className="mt-0.5 text-[14px] font-medium text-muted-foreground md:text-[15px]">
                  {experience.role}
                </p>

                <div className="mt-2 flex flex-col gap-1 text-[12px] font-medium text-muted-foreground/80 md:hidden">
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3.5 opacity-60"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-3.5 opacity-60"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.417 11.417 0 001.039.573l.019.008.006.003zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden flex-col items-end text-right text-sm font-medium text-muted-foreground/80 md:flex">
              <p>{experience.duration}</p>
              <p className="mt-1 flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-3.5 opacity-60"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.417 11.417 0 001.039.573l.019.008.006.003zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {experience.location}
              </p>
            </div>
          </div>

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
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="flex cursor-default select-none items-center gap-1.5 rounded-lg border border-border/50 bg-muted/30 px-2.5 py-1.5 text-[12px] font-semibold text-foreground shadow-sm transition-all hover:bg-muted/50 sm:gap-2 sm:rounded-xl sm:px-3 sm:text-xs dark:border-border/10 dark:bg-muted/10 dark:hover:bg-muted/20"
                  >
                    {icon ? (
                      <img
                        src={icon}
                        alt={tech}
                        className="size-3.5 object-contain opacity-90 transition-opacity group-hover:opacity-100"
                      />
                    ) : (
                      <div className="mx-0.5 size-1.5 rounded-full bg-foreground/20" />
                    )}
                    {tech}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

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
                className="flex items-start text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]"
              >
                <div className="mr-3 mt-[0.6em] flex h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20 sm:h-2 sm:w-2" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}

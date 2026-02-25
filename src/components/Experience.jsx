"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";
import { experienceData } from "@/lib/data";
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

  return (
    <section id="experience" className="w-full font-sans scroll-mt-24">
      <Heading
        title="Work Experience"
        subtitle="A track record of driving innovation and results through software."
      />

      <motion.div
        {...fadeUp()}
        className="relative w-full bg-card border border-border rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)" }}
      >
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex flex-col md:flex-row">

          {/* ── Left Panel ───────────────────────────────────── */}
          <motion.div
            {...fadeUp(0.05)}
            className="flex flex-col items-center md:items-start gap-5 p-7 sm:p-9 md:w-60 lg:w-72 md:border-r border-b md:border-b-0 border-border bg-muted/30"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="size-14 sm:size-16 rounded-xl bg-background flex items-center justify-center overflow-hidden border border-border shadow-sm"
            >
              <img
                src={experienceData.logo}
                alt={experienceData.company}
                className="size-full object-cover"
              />
            </motion.div>

            {/* Company & Role */}
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug">
                {experienceData.company}
              </h3>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-primary/8 text-primary rounded-full border border-primary/15">
                {experienceData.role}
              </span>
            </div>

            {/* Meta */}
            <div className="mt-1 space-y-2 text-[11px] sm:text-xs text-muted-foreground w-full">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Calendar size={12} className="shrink-0 opacity-60" />
                <span className="tabular-nums">{experienceData.duration}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={12} className="shrink-0 opacity-60" />
                <span>{experienceData.location}</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Panel ──────────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-8 p-7 sm:p-9">

            {/* Work done */}
            <motion.ul
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-3.5"
            >
              {experienceData.workDone.map((point, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex gap-3 text-[13px] sm:text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2 className="size-[15px] sm:size-4 shrink-0 text-primary mt-[3px] opacity-80" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tech stack */}
            <div className="pt-7 border-t border-border/60">
              <motion.p
                {...fadeUp(0.1)}
                className="text-[9px] sm:text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.18em] mb-3.5"
              >
                Technologies
              </motion.p>
              <motion.div
                variants={{
                  initial: {},
                  whileInView: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
                }}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="flex flex-wrap gap-1.5"
              >
                {techs.map((tech, i) => (
                  <motion.span
                    key={i}
                    variants={techItem}
                    whileHover={{ y: -1.5, transition: { duration: 0.15 } }}
                    className="px-2.5 py-1 bg-muted/60 text-muted-foreground text-[10px] sm:text-[11px] font-medium rounded-lg border border-border/80 cursor-default select-none"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
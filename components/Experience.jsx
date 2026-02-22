"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";
import { experienceData } from "@/lib/data";
import Heading from "./Heading";

export default function Experience() {
  return (
    <section id="experience" className="w-full font-sans scroll-mt-24">
      <Heading
        title="Work Experience"
        subtitle="A track record of driving innovation and results through software."
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-border shadow-sm flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 transition-colors"
      >
        {/* Left Column: Company Info */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start md:w-56 lg:w-64">
          <div className="size-16 sm:size-20 rounded-xl sm:rounded-2xl bg-muted flex items-center justify-center overflow-hidden border border-border shadow-sm mb-4 sm:mb-6">
            <img src={experienceData.logo} alt={experienceData.company} className="size-full object-cover" />
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground text-center md:text-left leading-snug">
            {experienceData.company}
          </h3>
          <span className="mt-1.5 px-2.5 py-1 text-[10px] sm:text-xs font-semibold bg-primary/10 text-primary rounded-full text-center">
            {experienceData.role}
          </span>

          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground w-full">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Calendar size={13} className="shrink-0" />
              <span>{experienceData.duration}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={13} className="shrink-0" />
              <span>{experienceData.location}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-border" />

        {/* Right Column: Details & Tech Stack */}
        <div className="flex-1 border-t md:border-t-0 border-border pt-6 md:pt-0 flex flex-col justify-between gap-6 sm:gap-8">
          <ul className="space-y-3 sm:space-y-4">
            {experienceData.workDone.map((point, i) => (
              <li key={i} className="flex gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                <CheckCircle2 className="size-4 sm:size-[18px] shrink-0 text-primary mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-5 sm:pt-6 border-t border-border">
            <p className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-widest mb-3 sm:mb-4">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {experienceData.techStack.split(", ").map((tech, i) => (
                <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground text-[10px] sm:text-xs font-medium rounded-md sm:rounded-lg border border-border transition-colors hover:border-foreground/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
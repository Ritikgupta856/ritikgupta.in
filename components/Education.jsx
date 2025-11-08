"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "./Heading";

const schools = [
  {
    title: "Bachelor's Degree in Computer Science",
    org: "Manipal University, Jaipur",
    period: "2020 — 2024",
    icon: "/icons/manipal.png",
  },
  {
    title: "Class XII",
    org: "Central Public Sr. Sec. School, Udaipur",
    period: "2020",
    icon: "/icons/cps.png",
  },
  {
    title: "Class X",
    org: "DAV HZL Senior Secondary School, Dariba",
    period: "2018",
    icon: "/icons/dav.png",
  },
];

export default function Education() {
  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
      >
        <Heading heading="Education" />
      </motion.div>

      <div className="relative space-y-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-border/80 md:space-y-8">
        <div className="flex min-h-0 flex-col gap-y-3">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="rounded-lg bg-card text-card-foreground flex p-3 shadow-sm hover:shadow-md transition">
                <div className="flex-none">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted flex items-center justify-center">
                    <Image
                      src={school.icon}
                      alt={school.org}
                      width={40}
                      height={40}
                      className="object-contain rounded-full"
                    />
                  </span>
                </div>

                <div className="flex-grow ml-4 flex flex-col justify-center group">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
                      {school.org}
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {school.period}
                    </div>
                  </div>
                  <div className="font-sans text-xs">{school.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

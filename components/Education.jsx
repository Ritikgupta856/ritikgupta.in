"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import Image from "next/image";
import Heading from "./Heading";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full border-x border-zinc-200 dark:border-zinc-800 font-mono"
    >
    <Heading heading="Education" />
      <div className="">
        <div className="flex flex-col">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              // Each item gets a border-bottom, the last one doesn't need it if it hits the section end
              className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0 p-6 md:p-8 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* School Icon - matching the Avatar border style */}
                <div className="flex-none">
                  <div className="relative shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700 size-14 bg-white dark:bg-zinc-800 p-1">
                    <Image
                      src={item.icon}
                      alt={item.org}
                      className="aspect-square h-full w-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                      width={56}
                      height={56}
                    />
                  </div>
                </div>

                <div className="flex-grow w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {item.org}
                    </h3>
                    {/* Period styled like the "Local Time" from your hero section */}
                    <div className="text-xs text-zinc-400 font-medium whitespace-nowrap">
                      <span className="text-zinc-300 dark:text-zinc-600 mr-2">
                        //
                      </span>
                      {item.period}
                    </div>
                  </div>

                  <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    {item.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

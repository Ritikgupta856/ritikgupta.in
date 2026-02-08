"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";


const Projects = () => {
  return (
    <section id="projects" className="w-full border-x border-zinc-200 dark:border-zinc-800 font-mono pb-10">
     
     <Heading heading="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-950 h-full"
          >
            <ProjectCard
              title={project.title}
              href={project.href}
              githubLink={project.githubLink}
              tags={project.tags}
              highlights={project.highlights}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
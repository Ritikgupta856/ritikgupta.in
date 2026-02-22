"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Projects = () => {
  return (
    <section id="projects" className="w-full font-sans scroll-mt-24">
      <Heading
        title="Featured Projects"
        subtitle="A selection of my recent work in building modern web applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.tech}
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
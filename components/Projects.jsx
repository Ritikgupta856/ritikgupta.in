"use client";
import React from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";

const Projects = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects">
      <Heading heading="Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            href={project.href}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

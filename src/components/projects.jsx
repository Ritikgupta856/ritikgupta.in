import ProjectCard from "./project-card";
import { projects } from "@/lib/data";
import Heading from "./heading";

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-8">
      <Heading title="Projects" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            githubLink={project.githubLink}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

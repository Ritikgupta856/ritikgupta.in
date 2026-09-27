import ProjectCard from "./project-card";
import { projects } from "@/lib/data";
import Heading from "./heading";
import ShowMore from "./show-more";

const VISIBLE_PROJECTS = 4;

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-8">
      <Heading title="Projects" />

      <ShowMore
        id="project-list"
        hiddenCount={projects.length - VISIBLE_PROJECTS}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            hideUntilExpanded={i >= VISIBLE_PROJECTS}
          />
        ))}
      </ShowMore>
    </section>
  );
};

export default Projects;

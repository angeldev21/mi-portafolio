import { useMediaQuery } from "react-responsive";

import Section from "./layout/Section";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const tablet = useMediaQuery({ query: "(min-width: 768px" });

  const projects = [1, 2, 3, 4, 5, 6];
  const projectsMobile = [1, 2, 3];
  return (
    <Section title="Proyectos" id="projects">
      <ul className="md:grid grid-cols-3 gap-4">
        {tablet
          ? projects.map((project) => (
              <li key={project}>
                <ProjectCard />
              </li>
            ))
          : projectsMobile.map((project) => (
              <li key={project}>
                <ProjectCard />
              </li>
            ))}
      </ul>
    </Section>
  );
};

export default Projects;

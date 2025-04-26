import Project from "../components/project/Project.jsx";
import { projects } from "../helpers/projectsList";

const ProjectsPage = () => {
  return (
    <main className="content">
      <section className="project-list section" id="projects">
        <div className="container">
          <h2 className="project-list__title section__title title title_size_xl title_accent">
            Projects
          </h2>
          <ul className="project-list__wrap">
            {projects.map((project, index) => {
              return (
                <Project
                  key={project.id}
                  slug={project.slug}
                  title={project.title}
                  alt={project.alt}
                  srcWebp={project.srcImageSmallWebp}
                  srcImage={project.srcImageSmall}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;

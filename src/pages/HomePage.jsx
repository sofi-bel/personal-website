import { NavLink } from "react-router-dom";
import HeroHeader from "../components/heroHeader/HeroHeader.jsx";
import Skill from "../components/skill/Skill.jsx";
import Project from "../components/project/Project.jsx";
import Certificate from "../components/certificate/Certificate.jsx";
import { skills } from "../helpers/skillsList";
import { projects } from "../helpers/projectsList";
import { certificates } from "../helpers/certificatesList";

const HomePage = () => {
  return (
    <main className="content">
      <HeroHeader />
      <section className="about-me section">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            About Me
          </h2>
          <p className="text text_centered">content will be here soon</p>
        </div>
      </section>
      <section className="skills section">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Skills
          </h2>
          <ul className="skill-list">
            {skills.map((skill) => {
              return <Skill key={skill.id} text={skill.text} />;
            })}
          </ul>
        </div>
      </section>
      <section className="experience section">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Experience
          </h2>
          <p className="text text_centered">content will be here soon</p>
        </div>
      </section>
      <section className="education section">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Education
          </h2>
          <p className="text text_centered">content will be here soon</p>
        </div>
      </section>
      <section className="project-list section">
        <div className="container">
          <h2 className="project-list__title section__title title title_size_xl title_accent">
            Last projects
          </h2>
          <ul className="project-list__wrap">
            {projects.slice(0, 3).map((project, index) => {
              return (
                <Project
                  key={project.id}
                  title={project.title}
                  fallback={project.fallback}
                  srcWebp={project.srcWebp}
                  index={index}
                />
              );
            })}
          </ul>
          <NavLink to="/projects" className="project-list__button">
            <button className="btn btn_theme_primary">More projects</button>
          </NavLink>
        </div>
      </section>
      <section className="certifications section" id="certifications">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Last certifications
          </h2>
          <ul className="certificate-list__wrap">
            {certificates.slice(0, 3).map((certificate, index) => {
              return (
                <Certificate
                  key={certificate.id}
                  title={certificate.title}
                  img={certificate.img}
                  url={certificate.url}
                  index={index}
                />
              );
            })}
          </ul>
          <NavLink to="/certifications" className="certificate-list__button">
            <button className="btn btn_theme_primary">
              More certifications
            </button>
          </NavLink>
        </div>
      </section>
      <section className="references section" id="references">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            References
          </h2>
          <p className="text text_centered">content will be here soon</p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

import React from "react";
import { useParams } from "react-router-dom";
import Btn from "../components/btn/Btn.jsx";
import BtnGitHub from "../components/btnGitHub/BtnGitHub.jsx";
import { projects } from "../helpers/projectsList";

const ProjectPage = () => {
  const {id} = useParams();
  const project = projects[id];

  return (
    <main className="content">
      <div className="container">
        <div className="project-details">
          <h1 className="project-list__title section__title title title_size_xl title_accent">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <div className="project-details__btn-wrap">
            {project.gitHubLink && (
              <BtnGitHub link={project.gitHubLink} />
            )}

            {project.webLink && (
              <Btn link={project.webLink} text="Website" />
            )}
          </div>
        </div>
      </div>
    </main>
    );
};

export default ProjectPage;
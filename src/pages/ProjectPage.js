import React from "react";
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";
import Btn from "../components/btn/Btn";
import BtnGitHub from "../../src/components/btnGitHub/BtnGitHub";

const ProjectPage = () => {
  const {id} = useParams();
  const project = projects[id];

  return (
    <main className="content">
      <div className="container">
        <div className="project-details">
          <h1 className="project-list__title section__title title title_size_xl title_accent">{project.title}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub link={project.gitHubLink} />
          )}

          {project.webLink && (
            <Btn link={project.webLink} text="Website" />
          )}
        </div>
      </div>
    </main>
    );
};

export default ProjectPage;
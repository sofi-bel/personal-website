import { useParams } from "react-router-dom";
import Btn from "../components/btn/Btn.jsx";
import BtnGitHub from "../components/btnGitHub/BtnGitHub.jsx";
import { projects } from "../helpers/projectsList";
import ImgNextGen from "../components/imgNextGen/ImgNextGen.jsx";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((el) => el.slug === slug);

  return (
    <main className="content">
      <div className="container">
        <div className="project-details">
          <h1 className="project-list__title section__title title title_size_xl title_accent">
            {project.title}
          </h1>
          <ImgNextGen
            className={"project-details__cover"}
            srcWebp={project.srcImageSmallWebp}
            srcImage={project.srcImageSmall}
            srcBigWebp={project.srcImageBigWebp}
            srcBigImage={project.srcImageBig}
            alt={project.alt}
            preload={project.index > 0}
          />
          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          <div className="project-details__btn-wrap">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}

            {project.webLink && (
              <Btn link={project.webLink} text="Website" type="external" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;

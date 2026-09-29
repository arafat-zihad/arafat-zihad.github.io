import { resolveAssetUrl } from "../assets/assetUrls";
import LinkButton from "./LinkButton";

const ProjectCard = (props) => {
  const { project, id } = props;

  return (
    <div className="project-card" key={id}>
      <div
        className={`project-card-container ${id % 2 === 0 ? "even-row" : "odd-row"}`}
      >
        <div className="project-card-image-wrapper">
          <img
            src={resolveAssetUrl(project.image)}
            className="project-card-image"
            alt={`${project.title} by Arafat Zihad - ${project.category} Project`}
          />
        </div>
        <div className="project-card-content">
          <div>
            <div className="project-card-badge-wrapper">
              <h5 className="project-card-type">{project.type}</h5>
            </div>
            <div className="project-card-title-wrapper">
              <h3 className="project-card-title">{project.title}</h3>
              <div className="project-card-title-line"></div>
            </div>
          </div>

          <div className="project-card-badges">
            {project.techStack.map((skill, index) => (
              <div key={index} className="badge">
                <span className="badge-hash">#</span>{skill}
              </div>
            ))}
          </div>

          <div className="project-card-description-wrapper">
            <p className="project-card-description">{project.description}</p>
          </div>

          <div className="project-card-actions">
            <div className="project-card-buttons">
              {project.githubLink && (
                <LinkButton
                  bgcolor={"white"}
                  textcolor={"black"}
                  text={"Github"}
                  link={project.githubLink}
                />
              )}
              {project.liveLink && (
                <LinkButton
                  bgcolor={"transparent"}
                  textcolor={"white"}
                  text={"Live"}
                  link={project.liveLink}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

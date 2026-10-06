import { X, ExternalLink, Layers, CheckCircle } from "lucide-react";
import { GithubIcon } from "./Icons";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal dialog">
          <X size={20} />
        </button>

        <div className="modal-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />
          <div className="modal-badge">{project.category}</div>
        </div>

        <div className="modal-body">
          <h3 id="modal-title" className="modal-title">{project.title}</h3>

          <p className="modal-description">{project.description}</p>

          <div className="modal-meta-box">
            <h4 className="meta-box-title">
              <Layers size={16} /> Technologies & Tools
            </h4>
            <div className="modal-tags-list">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

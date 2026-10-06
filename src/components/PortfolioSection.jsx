import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { ExternalLink, Eye, Filter } from "lucide-react";
import { GithubIcon } from "./Icons";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "React & Web Apps", "UI/UX Design", "Creative"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section className="portfolio section" id="portfolio" aria-label="Portfolio section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-title">
          <span className="section-subtitle">My Creative Work</span>
          <h2>Portfolio</h2>
          <div className="section-title-bar"></div>
        </div>

        <p className="section-intro-text">
          Explore a curated selection of web applications, design systems, and responsive user
          interfaces built with modern web technologies.
        </p>

        {/* Category Filters */}
        <div className="portfolio-filter-row">
          <div className="filter-pills-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="category-count">
                  {cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card shadow-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-card-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-card-image"
                  loading="lazy"
                />
                <div className="portfolio-card-overlay">
                  <span className="overlay-view-text">
                    <Eye size={18} />
                    <span>View Project</span>
                  </span>
                </div>
                <span className="portfolio-card-badge">{project.category}</span>
              </div>

              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>

                <div className="portfolio-card-tags">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="portfolio-tag more">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="portfolio-card-footer" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="portfolio-link-icon-btn primary"
                    onClick={() => setSelectedProject(project)}
                    title="View details"
                  >
                    <Eye size={16} />
                    <span>Details</span>
                  </button>

                  <div className="card-external-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link-icon-btn"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-link-icon-btn"
                        title="Source Code"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

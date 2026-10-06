import React, { useState } from "react";
import {
  personalInfo,
  skills,
  education,
  experience
} from "../data/portfolioData";
import {
  Calendar,
  User,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  Copy,
  Check,
  Download,
  Send,
  Award,
  Sparkles,
  BookOpen
} from "lucide-react";

export function AboutSection({ onNavigate, onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const iconMap = {
    Calendar: <Calendar size={18} />,
    User: <User size={18} />,
    GraduationCap: <GraduationCap size={18} />,
    Mail: <Mail size={18} />,
    Phone: <Phone size={18} />,
    MapPin: <MapPin size={18} />,
    Briefcase: <Briefcase size={18} />,
    Globe: <Globe size={18} />
  };

  const handleCopy = (text, key) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      if (onShowToast) {
        onShowToast({
          type: "success",
          message: `Copied "${text}" to clipboard!`
        });
      }
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const categories = ["all", ...skills.map((s) => s.category)];

  const displayedSkills =
    activeSkillCategory === "all"
      ? skills.flatMap((s) => s.items)
      : skills.find((s) => s.category === activeSkillCategory)?.items || [];

  return (
    <section className="about section" id="about" aria-label="About Me section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-title">
          <span className="section-subtitle">Get to know me</span>
          <h2>About Me</h2>
          <div className="section-title-bar"></div>
        </div>

        {/* Intro Highlight & Bio */}
        <div className="about-intro-card">
          <h3 className="about-intro-heading">
            I'm <span className="highlight-text">{personalInfo.name}</span>, a passionate{" "}
            <span className="accent-text">{personalInfo.titles[0]}</span>
          </h3>
          <p className="about-intro-text">
            {personalInfo.bio} I thrive at the intersection of aesthetic design and performant code.
            Whether architecting scalable frontend components in React, crafting responsive layout
            systems, or optimizing Core Web Vitals, I aim for flawless user experiences.
          </p>

          {/* Stats Badges */}
          <div className="about-stats-grid">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="about-stat-card">
                <span className="stat-card-number">{stat.number}</span>
                <span className="stat-card-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Info Grid */}
        <div className="about-details-section">
          <h4 className="sub-heading">
            <Sparkles size={18} /> Personal Details
          </h4>
          <div className="details-grid">
            {personalInfo.details.map((item, idx) => {
              const isCopied = copiedKey === item.label;
              return (
                <div key={idx} className="detail-card">
                  <div className="detail-icon-box">{iconMap[item.icon] || <User size={18} />}</div>
                  <div className="detail-text-box">
                    <span className="detail-label">{item.label}</span>
                    <div className="detail-value-wrapper">
                      {item.isLink ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="detail-link"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="detail-value">
                          {item.status === "available" && <span className="available-pill" />}
                          {item.value}
                        </span>
                      )}

                      {item.isCopyable && (
                        <button
                          className="copy-btn"
                          onClick={() => handleCopy(item.value, item.label)}
                          aria-label={`Copy ${item.label}`}
                          title={`Copy ${item.value}`}
                        >
                          {isCopied ? (
                            <Check size={14} className="copied-icon" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-cta-buttons">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate("contact")}
            >
              <Send size={18} />
              <span>Hire Me</span>
            </button>
            <a
              href="#portfolio"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("portfolio");
              }}
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="skills-section">
          <div className="skills-header-row">
            <div>
              <h4 className="sub-heading">
                <Award size={18} /> Technical Expertise & Skills
              </h4>
              <p className="sub-heading-desc">
                My proficiency across frontend frameworks, design systems, and core computer science
              </p>
            </div>

            {/* Category filter pills */}
            <div className="skill-category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`skill-cat-pill ${activeSkillCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveSkillCategory(cat)}
                >
                  {cat === "all" ? "All Skills" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="skills-bars-grid">
            {displayedSkills.map((skill, idx) => (
              <div key={idx} className="skill-bar-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percent}%</span>
                </div>
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.percent}%` }}
                    role="progressbar"
                    aria-valuenow={skill.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience Dual Timeline */}
        <div className="timeline-section">
          <div className="timeline-columns-grid">
            {/* Education Column */}
            <div className="timeline-column">
              <h4 className="sub-heading">
                <GraduationCap size={20} /> Education
              </h4>
              <div className="timeline-tree">
                {education.map((item, idx) => (
                  <div key={idx} className="timeline-node">
                    <div className="node-dot" />
                    <div className="timeline-card">
                      <div className="timeline-badge">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <h5 className="timeline-card-title">{item.title}</h5>
                      <span className="timeline-card-subtitle">{item.institution}</span>
                      <p className="timeline-card-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="timeline-column">
              <h4 className="sub-heading">
                <Briefcase size={20} /> Experience
              </h4>
              <div className="timeline-tree">
                {experience.map((item, idx) => (
                  <div key={idx} className="timeline-node">
                    <div className="node-dot" />
                    <div className="timeline-card">
                      <div className="timeline-badge">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <h5 className="timeline-card-title">{item.title}</h5>
                      <span className="timeline-card-subtitle">{item.company}</span>
                      <p className="timeline-card-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

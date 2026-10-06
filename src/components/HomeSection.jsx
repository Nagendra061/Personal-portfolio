import React from "react";
import { personalInfo } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useTypewriter";
import { Download, ArrowRight, Mail, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function HomeSection({ onNavigate, onShowToast }) {
  const typedTitle = useTypewriter(personalInfo.titles, 80, 45, 2000);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    if (onShowToast) {
      onShowToast({
        type: "success",
        message: "CV downloaded successfully! (Demo file generated)"
      });
    }

    // Create a mock CV download file or trigger download
    const blob = new Blob([
      `Nagendra Varma - Full-Stack Developer & Designer\nEmail: ${personalInfo.details.find(d => d.label === 'Email')?.value}\nPortfolio: https://digitalpromax.blogspot.com\nSkills: React, JavaScript, HTML5, CSS3, Vite, UI/UX\n\nThank you for downloading!`
    ], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Nagendra_Varma_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="home section active" id="home" aria-label="Home section">
      <div className="section-container">
        <div className="home-grid">
          {/* Left Text Column */}
          <div className="home-info">
            <div className="home-greeting-pill">
              <span className="sparkle-icon"><Sparkles size={16} /></span>
              <span>Welcome to my digital space</span>
            </div>

            <h1 className="hello-title">
              Hello, my name is <span className="name-highlight">{personalInfo.name}</span>
            </h1>

            <h2 className="title-typewriter">
              I'm a <span className="typing-text">{typedTitle}</span>
              <span className="typing-cursor" aria-hidden="true">|</span>
            </h2>

            <p className="home-description">
              {personalInfo.bio}
            </p>

            {/* Quick stats badges */}
            <div className="home-stats-preview">
              <div className="stat-preview-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-preview-divider" />
              <div className="stat-preview-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-preview-divider" />
              <div className="stat-preview-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="home-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("contact");
                }}
              >
                <span>Let's Talk</span>
                <ArrowRight size={18} />
              </a>

              <button
                className="btn btn-secondary"
                onClick={handleDownloadCV}
                title="Download Resume / CV"
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social links row */}
            <div className="home-socials">
              <span className="socials-label">Connect:</span>
              <div className="social-icons-list">
                {personalInfo.socials.map((social) => {
                  let IconComponent = Globe;
                  if (social.name === "GitHub") IconComponent = GithubIcon;
                  else if (social.name === "LinkedIn") IconComponent = LinkedinIcon;
                  else if (social.name === "Email") IconComponent = Mail;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-btn"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Avatar Column */}
          <div className="home-avatar-column">
            <div className="avatar-frame-wrapper">
              <div className="avatar-glow-backdrop" />
              <div className="avatar-frame">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.heroAlt}
                  className="avatar-image"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              {/* Floating feature tags */}
              <div className="floating-badge badge-top-right">
                <span className="badge-icon"><CheckCircle2 size={16} /></span>
                <div className="badge-content">
                  <span className="badge-title">React 19 & Vite</span>
                  <span className="badge-sub">Modern Tech Stack</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <span className="status-dot-pulse" />
                <div className="badge-content">
                  <span className="badge-title">Open for Roles</span>
                  <span className="badge-sub">Full-Time & Freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

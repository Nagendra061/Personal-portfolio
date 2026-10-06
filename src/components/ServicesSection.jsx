import React from "react";
import { services } from "../data/portfolioData";
import {
  Layout,
  Code2,
  Smartphone,
  Zap,
  Palette,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function ServicesSection({ onNavigate }) {
  const iconMap = {
    Layout: <Layout size={28} />,
    Code2: <Code2 size={28} />,
    Smartphone: <Smartphone size={28} />,
    Zap: <Zap size={28} />,
    Palette: <Palette size={28} />,
    Sparkles: <Sparkles size={28} />
  };

  return (
    <section className="services section" id="services" aria-label="Services section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-title">
          <span className="section-subtitle">What I do for clients</span>
          <h2>Services</h2>
          <div className="section-title-bar"></div>
        </div>

        <p className="section-intro-text">
          I provide end-to-end digital solutions focused on high-conversion design, clean modern code,
          lightning-fast performance, and accessible responsive user interfaces.
        </p>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card shadow-card">
              <div className="service-card-glow" />
              <div className="service-icon-box">
                {iconMap[service.icon] || <Code2 size={28} />}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              {service.features && (
                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="service-feature-item">
                      <CheckCircle size={14} className="feature-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="service-card-action">
                <button
                  className="service-inquire-btn"
                  onClick={() => onNavigate("contact")}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Discuss Project</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import confetti from "canvas-confetti";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Send,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";

export function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const phoneInfo = personalInfo.details.find((d) => d.label === "Phone")?.value || "+91 8525928xxx";
  const emailInfo = personalInfo.details.find((d) => d.label === "Email")?.value || "nagendravarma061@gmail.com";
  const locationInfo = personalInfo.details.find((d) => d.label === "Location")?.value || "India";
  const websiteInfo = "digitalpromax.blogspot.com";

  const handleCopy = (text, key) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      if (onShowToast) {
        onShowToast({
          type: "success",
          message: `Copied ${text} to clipboard!`
        });
      }
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (onShowToast) {
        onShowToast({
          type: "error",
          message: "Please complete all required fields"
        });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate network API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      if (onShowToast) {
        onShowToast({
          type: "success",
          message: "Thank you! Your message has been sent successfully."
        });
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <section className="contact section" id="contact" aria-label="Contact Me section">
      <div className="section-container">
        {/* Section Title */}
        <div className="section-title">
          <span className="section-subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
          <div className="section-title-bar"></div>
        </div>

        <p className="section-intro-text">
          Have an exciting project, open position, or question? Feel free to reach out directly or
          drop a message in the form below. I typically respond within 24 hours.
        </p>

        {/* Contact Info Cards Grid */}
        <div className="contact-info-grid">
          {/* Phone */}
          <div className="contact-info-card shadow-card">
            <div className="contact-icon-box">
              <Phone size={22} />
            </div>
            <h3 className="contact-card-title">Call / WhatsApp</h3>
            <p className="contact-card-value">{phoneInfo}</p>
            <div className="contact-card-actions">
              <button
                className="contact-action-btn"
                onClick={() => handleCopy(phoneInfo, "phone")}
                title="Copy phone number"
              >
                {copiedKey === "phone" ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedKey === "phone" ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="contact-info-card shadow-card">
            <div className="contact-icon-box">
              <MapPin size={22} />
            </div>
            <h3 className="contact-card-title">Location</h3>
            <p className="contact-card-value">{locationInfo}</p>
            <div className="contact-card-actions">
              <span className="contact-status-tag">Available Remotely</span>
            </div>
          </div>

          {/* Email */}
          <div className="contact-info-card shadow-card">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-value email-val">{emailInfo}</p>
            <div className="contact-card-actions">
              <a
                href={`mailto:${emailInfo}`}
                className="contact-action-btn primary"
                title="Send email"
              >
                <Mail size={14} />
                <span>Write Mail</span>
              </a>
              <button
                className="contact-action-btn"
                onClick={() => handleCopy(emailInfo, "email")}
                title="Copy email"
              >
                {copiedKey === "email" ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedKey === "email" ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Website */}
          <div className="contact-info-card shadow-card">
            <div className="contact-icon-box">
              <Globe size={22} />
            </div>
            <h3 className="contact-card-title">Official Website</h3>
            <p className="contact-card-value">{websiteInfo}</p>
            <div className="contact-card-actions">
              <a
                href="https://digitalpromax.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn primary"
              >
                <Globe size={14} />
                <span>Visit Blog</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container shadow-card">
          <div className="form-header">
            <h3 className="form-title">Send Me a Message</h3>
            <p className="form-subtitle">Fill out the details below and I'll get back to you shortly</p>
          </div>

          {isSubmitted && (
            <div className="form-success-banner">
              <CheckCircle2 size={24} className="banner-icon" />
              <div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
              <button
                className="btn btn-secondary banner-reset-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          )}

          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row two-cols">
                <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="contact-name">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    disabled={isSubmitting}
                    className="form-input"
                  />
                  {errors.name && (
                    <span className="error-message">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="contact-email">
                    Your Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    disabled={isSubmitting}
                    className="form-input"
                  />
                  {errors.email && (
                    <span className="error-message">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row single-col">
                <div className={`form-group ${errors.subject ? "has-error" : ""}`}>
                  <label htmlFor="contact-subject">
                    Subject <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    disabled={isSubmitting}
                    className="form-input"
                  />
                  {errors.subject && (
                    <span className="error-message">
                      <AlertCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row single-col">
                <div className={`form-group ${errors.message ? "has-error" : ""}`}>
                  <label htmlFor="contact-message">
                    Your Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Nagendra, I'd like to discuss a project..."
                    disabled={isSubmitting}
                    className="form-textarea"
                  />
                  {errors.message && (
                    <span className="error-message">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spinner-icon" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

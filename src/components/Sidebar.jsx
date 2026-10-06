import React from "react";
import { Home, User, Briefcase, Layers, Send, Menu, X, Sparkles } from "lucide-react";

export function Sidebar({ activeSection, onNavClick, isMobileOpen, setIsMobileOpen }) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "services", label: "Services", icon: <Briefcase size={18} /> },
    { id: "portfolio", label: "Portfolio", icon: <Layers size={18} /> },
    { id: "contact", label: "Contact", icon: <Send size={18} /> }
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    onNavClick(id);
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="nav-toggler"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMobileOpen}
      >
        {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Aside Navigation Bar */}
      <aside className={`aside ${isMobileOpen ? "open" : ""}`} aria-label="Main Navigation">
        <div className="logo">
          <a href="#home" onClick={(e) => handleLinkClick(e, "home")} className="logo-link">
            <span className="logo-badge">N</span>
            <span className="logo-text">Nagendra</span>
            <span className="logo-dot"></span>
          </a>
        </div>

        <nav className="nav-container">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {isActive && <span className="nav-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="aside-footer">
          <div className="aside-status-badge">
            <span className="status-indicator-dot"></span>
            <span className="status-text">Available for Projects</span>
          </div>
          <p className="copyright-text">
            © {new Date().getFullYear()} Nagendra Varma.
            <br />
            <span>Built with React 19 & Vite</span>
          </p>
        </div>
      </aside>
    </>
  );
}

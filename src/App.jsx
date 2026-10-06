import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Toast } from "./components/Toast";
import { ArrowUp } from "lucide-react";
import "./index.css";

export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  // Handle smooth scroll to section
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll spy & Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check section offsets
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio-app-root">
      {/* Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onNavClick={handleNavigate}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content Area */}
      <main className="main-content" id="main-content">
        <HomeSection onNavigate={handleNavigate} onShowToast={showToast} />
        <AboutSection onNavigate={handleNavigate} onShowToast={showToast} />
        <ServicesSection onNavigate={handleNavigate} />
        <PortfolioSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Floating Theme & Skin Switcher */}
      <ThemeSwitcher onShowToast={showToast} />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Floating Back-To-Top Button */}
      {showScrollTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;

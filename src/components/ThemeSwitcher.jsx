import React, { useState, useEffect, useRef } from "react";
import { Settings, Sun, Moon, Palette, Check } from "lucide-react";
import { themeColors } from "../data/portfolioData";

export function ThemeSwitcher({ onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme_mode");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });

  const [activeSkin, setActiveSkin] = useState(() => {
    try {
      return localStorage.getItem("portfolio_skin_color") || "crimson";
    } catch {
      return "crimson";
    }
  });

  const panelRef = useRef(null);

  // Sync theme changes with DOM
  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("portfolio_theme_mode", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("portfolio_theme_mode", "light");
      }
    } catch (e) {
      console.error(e);
    }
  }, [isDark]);

  // Sync skin color changes with DOM
  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-skin", activeSkin);
      localStorage.setItem("portfolio_skin_color", activeSkin);
    } catch (e) {
      console.error(e);
    }
  }, [activeSkin]);

  // Close panel on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (onShowToast) {
      onShowToast({
        type: "info",
        message: `Switched to ${nextDark ? "Dark" : "Light"} mode`
      });
    }
  };

  const handleSelectSkin = (skin) => {
    setActiveSkin(skin.id);
    if (onShowToast) {
      onShowToast({
        type: "success",
        message: `Applied ${skin.name} palette`
      });
    }
  };

  return (
    <div className={`style-switcher-wrapper ${isOpen ? "open" : ""}`} ref={panelRef}>
      {/* Floating control buttons */}
      <div className="style-switcher-controls">
        <button
          className="style-switcher-toggle s-icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle style switcher settings"
          title="Customize Theme & Palette"
        >
          <Settings size={20} className={isOpen ? "icon-spin-active" : "icon-spin-hover"} />
        </button>
        <button
          className="theme-mode-toggle s-icon"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
          title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Slide-out drawer panel */}
      <div className="style-switcher-panel">
        <div className="switcher-header">
          <Palette size={18} />
          <h4>Theme Color</h4>
        </div>
        <p className="switcher-hint">Select your preferred accent skin</p>

        <div className="skin-colors-grid">
          {themeColors.map((color) => {
            const isSelected = activeSkin === color.id;
            return (
              <button
                key={color.id}
                className={`skin-color-item ${isSelected ? "active" : ""}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => handleSelectSkin(color)}
                aria-label={`Select ${color.name}`}
                title={color.name}
              >
                {isSelected && <Check size={14} className="check-icon" />}
              </button>
            );
          })}
        </div>

        <div className="switcher-footer">
          <div className="switcher-mode-info">
            <span>Appearance</span>
            <button className="mode-pill-btn" onClick={toggleTheme}>
              {isDark ? (
                <>
                  <Moon size={14} /> Dark Mode
                </>
              ) : (
                <>
                  <Sun size={14} /> Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

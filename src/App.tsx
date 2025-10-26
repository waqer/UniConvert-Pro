import React, { useState, useEffect } from "react";
import { ConverterSelector } from "./components/ConverterSelector";
import { TemperatureConverter } from "./converters/TemperatureConverter";
import { CurrencyConverter } from "./converters/CurrencyConverter";
import { WeightConverter } from "./converters/WeightConverter";
import { LengthConverter } from "./converters/LengthConverter";

export const App: React.FC = () => {
  const [mode, setMode] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleBack = () => setMode(null);

  // Apply dark mode class to body dynamically
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (

    <div>
      <div className="app-container fade-in">
        {/* 🌗 Dark Mode Toggle */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <h2 className="mb-4 text-center fw-bold text-gradient">🌐 UniConverter Pro</h2>

        {!mode && (
          <div className="text-center">
            <ConverterSelector onSelect={setMode} />
          </div>
        )}

        {mode === "temperature" && <TemperatureConverter onBack={handleBack} />}
        {mode === "currency" && <CurrencyConverter onBack={handleBack} />}
        {mode === "weight" && <WeightConverter onBack={handleBack} />}
        {mode === "length" && <LengthConverter onBack={handleBack} />}
      </div>


      <footer className="footer text-center mt-4">
        <p className="mb-0">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/shahwaqerkabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Shah Waqer Kabir
          </a>{" "}
          © 2025
        </p>
      </footer>
    </div>
  );
};

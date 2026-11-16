import { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setDarkMode(!darkMode)}
      className="theme-button"
    >
      <i
        className={`fa-solid ${
          darkMode ? "fa-sun" : "fa-moon"
        } text-base sm:text-lg transition-transform duration-200`}
      ></i>
    </button>
  );
};

export default ThemeBtn;

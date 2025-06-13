import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const bgColor = isDarkMode
    ? "bg-slate-950 border-slate-700"
    : "bg-white border-slate-300";
  const subText = isDarkMode ? "text-white" : "text-gray-700";

  return (
    <header
      className={`border-b shadow-md transition-colors duration-300 ${bgColor}`}
    >
      <div className="max-w-[900px] mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-tr from-[#00FFE0] via-[#7F00FF] to-[#FF4D4D] bg-clip-text text-transparent">
            The SweatLog
          </h1>
          <p
            className={`hidden sm:block text-sm sm:text-base font-medium tracking-wide transition-colors ${subText}`}
          >
            Sweat. Log. Repeat. The 180 Simple Workouts Program.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition"
            aria-label="Toggle Theme"
          >
            <img
              src={isDarkMode ? "/sun.png" : "/moon.png"}
              alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`object-contain transition-all duration-300 ${
                isDarkMode ? "w-7 h-7" : "w-5 h-5"
              }`}
            />
          </button>

          <button className="px-4 py-2 rounded-md bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

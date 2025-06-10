import React, { useContext } from "react";
import { ThemeContext } from "../utils/theme-context";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`
        shadow-md transition-colors duration-300
        ${
          isDarkMode
            ? "bg-slate-950 border-b border-slate-700"
            : "bg-white border-b border-slate-300"
        }
      `}
    >
      <div className="max-w-[900px] mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="sm:space-y-1">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-tr from-[#00FFE0] via-[#7F00FF] to-[#FF4D4D] bg-clip-text text-transparent">
            The SweatLog
          </h1>
          <p
            className={`text-sm sm:text-base font-medium tracking-wide hidden sm:block transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Sweat. Log. Repeat. The 30 Simple Workouts Program.
          </p>
        </div>
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-10 h-10 border-none rounded-full overflow-hidden  duration-200 cursor-pointer transition sm:self-start"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <img
              className="absolute w-7 h-7 object-contain transition-all duration-300 ease-in-out"
              src="/sun.png"
              alt="Light Mode Toggle"
            />
          ) : (
            <img
              className="absolute w-5 h-5 object-contain transition-all duration-300 ease-in-out"
              src="/moon.png"
              alt="Dark Mode Toggle"
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

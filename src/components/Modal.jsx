import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../utils/theme-context";

const Modal = ({ showExerciseDescription, handleCloseModal }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { name, description } = showExerciseDescription || {};

  return ReactDOM.createPortal(
    <div
      className="fixed z-50 inset-0 flex justify-center items-center px-4 cursor-pointer"
      style={{
        backgroundColor: isDarkMode
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(0, 0, 0, 0.4)",
      }}
      onClick={handleCloseModal}
    >
      <div
        className={`
          rounded-xl shadow-lg p-6 w-full max-w-md animate-fadeIn scale-95 cursor-default transition-colors duration-300
          ${isDarkMode ? "bg-slate-800" : "bg-white"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3
            className={`text-xl font-semibold transition-colors duration-300
              ${isDarkMode ? "text-white" : "text-slate-800"}
            `}
          >
            Exercise Info
          </h3>
          <button
            onClick={handleCloseModal}
            className={`cursor-pointer transition duration-200 text-2xl
              ${
                isDarkMode
                  ? "text-slate-400 hover:text-red-400"
                  : "text-slate-400 hover:text-red-500"
              }
            `}
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <h6
            className={`text-sm transition-colors duration-300
              ${isDarkMode ? "text-slate-400" : "text-slate-500"}
            `}
          >
            Name
          </h6>
          <h2
            className={`text-lg font-bold break-words transition-colors duration-300
              ${isDarkMode ? "text-white" : "text-slate-800"}
            `}
          >
            {name?.replaceAll("-", " ")}
          </h2>
        </div>

        <div>
          <h6
            className={`text-sm transition-colors duration-300
              ${isDarkMode ? "text-slate-400" : "text-slate-500"}
            `}
          >
            Description
          </h6>
          <p
            className={`text-base whitespace-pre-line transition-colors duration-300
              ${isDarkMode ? "text-slate-300" : "text-slate-700"}
            `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("popup")
  );
};

export default Modal;

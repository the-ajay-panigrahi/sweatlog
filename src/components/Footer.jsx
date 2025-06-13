import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const bgColor = isDarkMode
    ? "bg-slate-950 text-white"
    : "bg-white text-slate-900";

  return (
    <footer className={`border-t border-slate-300 ${bgColor} shadow-inner`}>
      <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-5 text-center text-sm sm:text-base">
        <p>
          &copy; {new Date().getFullYear()} SweatLog. Helping you stay on track.
        </p>
        <p>Keep moving. Keep logging. Keep growing.</p>
      </div>
    </footer>
  );
};

export default Footer;

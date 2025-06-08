import React from "react";

const Footer = () => {
  return (
    <footer
      className="border-t border-slate-300"
      style={{
        boxShadow:
          "0 -4px 6px -1px rgba(0,0,0,0.1), 0 -2px 4px -1px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row gap-2 justify-center items-center text-center px-4 py-5">
        <p className="text-slate-900 font-thin">
          &copy; {new Date().getFullYear()} SweatLog. Helping you stay on track.
        </p>
        <p className="text-slate-900 font-thin">
          Keep moving. Keep logging. Keep growing.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

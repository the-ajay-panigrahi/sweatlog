import React from "react";

const Header = () => {
  return (
    <header className="border-b border-slate-300 shadow-md">
      <div className="max-w-[900px] mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="sm:space-y-1">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-tr from-[#00FFE0] via-[#7F00FF] to-[#FF4D4D] bg-clip-text text-transparent">
            The SweatLog
          </h1>
          <p className="text-sm sm:text-base font-medium tracking-wide text-gray-700 hidden sm:block">
            Sweat. Log. Repeat. The 30 Simple Workouts Program.
          </p>
        </div>
        <button className="px-4 py-2 text-xs border-none rounded hover:bg-gray-100 transition sm:self-start">
          <img className="w-5" src="/image.png" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;

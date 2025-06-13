import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context.jsx";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div
        className={`max-w-[900px] mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col gap-8 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 mt-4 md:mt-10">
          <div className="md:flex-1">
            <h5 className="text-center sm:text-left text-xl sm:text-2xl font-semibold mb-4">
              This plan is for you if you want to
            </h5>
            <ol className="list-decimal list-inside text-lg sm:text-xl space-y-3 pl-5">
              <li>Follow an easy no-nonsense routine</li>
              <li>Get fit, lean and stronger</li>
              <li>Understand how to train the right way</li>
              <li>Feel confident in the gym 💪</li>
            </ol>
          </div>

          <div className="mt-6 md:mt-0 md:flex-1 md:max-w-[300px]">
            <img
              src="/hero-img.jpg"
              alt="hero"
              className="w-[300px] mx-auto rounded-md shadow-md grayscale hover:grayscale-0 hover:scale-105 hover:rounded-2xl transition-all duration-300 cursor-pointer rotate-y-180"
            />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-10">Quick Rules</h3>
        <p className="text-lg sm:text-xl mb-4">
          Stick to these 3 simple rules to see real results
        </p>
        <ul className="list-disc list-inside space-y-4 pl-5 text-lg sm:text-xl">
          <li className="flex gap-4">
            <p className="font-semibold min-w-[5rem]">Rest</p>
            <p>Take breaks when needed so your body can recover</p>
          </li>
          <li className="flex gap-4">
            <p className="font-semibold min-w-[5rem]">Reps</p>
            <p>
              Follow the{" "}
              <abbr
                title="2 seconds down &ndash; 2 seconds pause &ndash; 2 seconds up"
                className="cursor-help underline decoration-dotted"
              >
                2&ndash;2&ndash;2
              </abbr>{" "}
              tempo for every rep
            </p>
          </li>
          <li className="flex gap-4">
            <p className="font-semibold min-w-[5rem]">Weight*</p>
            <p>Pick weights that challenge you but keep your form solid</p>
          </li>
        </ul>

        <small
          className={`block mt-2 italic text-base ${
            isDarkMode ? "text-slate-400" : "text-gray-600"
          }`}
        >
          * Start lighter: first two sets at 75%&nbsp;and&nbsp;85% of your top
          weight
        </small>

        <h3 className="text-xl sm:text-2xl font-semibold mt-10">
          How It Works
        </h3>
        <p className="text-lg sm:text-xl mb-2">
          We&rsquo;re using the classic <b>Bro Split</b>. Here&rsquo;s your
          cycle
        </p>
        <p className="text-lg sm:text-xl font-semibold italic mb-6">
          Push &rarr; Pull &rarr; Legs &rarr; Repeat
        </p>
        <p className="text-lg sm:text-xl">
          Just follow the plan, show up every day and track your progress
          &#x2705;
        </p>
      </div>
    </div>
  );
};

export default Hero;

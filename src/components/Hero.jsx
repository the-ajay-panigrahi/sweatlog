const Hero = () => {
  return (
    <section className="w-full bg-white dark:bg-[#0a0a0c] transition-colors duration-300">
      <div className="px-4 pt-10 pb-5 sm:pt-14 sm:pb-8  max-w-[700px] mx-auto text-zinc-800 dark:text-zinc-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
          <div className="flex-1 space-y-4">
            <h2
              className="inline-block text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-[2px] rounded-full tracking-wide mb-6
            transition-all duration-300 hover:shadow-sm hover:scale-[1.03]"
            >
              The 30 Simple Workouts Program
            </h2>
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white tracking-tight">
              Complete this training program if you want to ...
            </h3>
            <ul className="list-decimal list-inside space-y-1 pl-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
              {[
                "Follow a simple program with guaranteed results",
                "Get fit, healthy, strong and shredded",
                "Learn more about gym, training and technique",
                "Become a lifetime gym bro",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="transition-all duration-300 hover:translate-x-1 hover:text-zinc-900 dark:hover:text-white"
                >
                  {text}
                  {text.includes("bro") && (
                    <i className="fas fa-heart text-amber-500 ml-1 animate-pulse" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-shrink-0 md:w-48 mx-auto md:mx-0">
            <img
              src="/hero-img.jpg"
              alt="Training"
              className="w-full h-auto rounded-lg shadow dark:shadow-zinc-900 transition-transform duration-300 transform rotate-y-180 hover:scale-[1.03] "
            />
          </div>
        </div>

        <div className="mb-10 space-y-3">
          <h3
            className="inline-block text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 
              px-3 py-[2px] rounded-full tracking-wide transition-all duration-300 hover:shadow hover:scale-105"
          >
            The Rules
          </h3>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
            To complete this program, you <strong>MUST</strong> follow these 3
            simple rules:
          </p>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <span className="font-bold">Rest</span> — Take recovery seriously
            </li>
            <li>
              <span className="font-bold">Reps</span> — Every rep is a pause rep
              at a{" "}
              <abbr
                title="2 seconds down, 2 second pause, 2 seconds up"
                className="cursor-help bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-2 py-0.5 rounded-md text-xs font-mono tracking-tight
                  transition-shadow duration-300 hover:shadow-md"
              >
                2 - 2 - 2 tempo
              </abbr>
            </li>
            <li>
              <span className="font-bold">Weight*</span> — Choose the heaviest
              weight that allows great form
            </li>
          </ul>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 italic">
            * The first and second set should be at 75% and 85% of your working
            weight.
          </p>
        </div>

        <div className="space-y-3">
          <h3
            className="inline-block text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 
              px-3 py-[2px] rounded-full tracking-wide transition-all duration-300 hover:shadow hover:scale-105"
          >
            The Training Plan
          </h3>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
            This training plan uses a structure known as the{" "}
            <span className="font-semibold bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-fuchsia-500 dark:to-cyan-400 bg-clip-text text-transparent">
              Bro Split
            </span>{" "}
            and follows this rotation{" "}
            <i className="fas fa-arrow-down text-xs sm:text-sm align-middle ml-1 animate-bounce text-zinc-500" />
          </p>
          <p className="italic text-sm sm:text-base font-semibold">
            <span className="text-zinc-900 dark:text-white">Push</span> →{" "}
            <span className="text-zinc-900 dark:text-white">Pull</span> →{" "}
            <span className="text-zinc-900 dark:text-white">Legs</span> →{" "}
            <span className="text-zinc-900 dark:text-white">Repeat</span>
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Track each workout and see your gains grow{" "}
            <i className="fas fa-check-circle text-green-500 text-sm ml-1 hover:scale-110 transition-transform duration-300" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

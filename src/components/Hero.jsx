import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[900px] mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 text-gray-800">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:mt-5">
        <div className="md:flex-1 md:self-start md:mt-12">
          <h5 className="text-center sm:text-left text-lg sm:text-xl font-semibold mb-4">
            Complete this training program if you want to ...
          </h5>

          <ol className="list-decimal list-inside text-base sm:text-lg space-y-2 sm:space-y-3 pl-5">
            <li>Follow a simple program with guaranteed results</li>
            <li>Get fit, healthy, strong and shredded</li>
            <li>Learn more about gym, training and technique</li>
            <li>Become a lifetime gym bro 💖</li>
          </ol>
        </div>

        <div className="mt-6 md:mt-0 md:flex-1 md:max-w-[300px]">
          <img
            src="/hero-img.jpg"
            alt="hero"
            className="transform rotate-y-180 w-full h-auto rounded-md shadow-md hover:scale-110 transition-all duration-200 cursor-pointer hover:rotate-12 grayscale hover:grayscale-0 hover:rounded-2xl"
          />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mt-8">The Rules</h3>

      <p className="text-base sm:text-lg mb-4">
        To complete this program, you <b>MUST</b> follow these 3 simple rules:
      </p>

      <ul className="list-disc list-inside space-y-4 pl-5">
        <li className="flex gap-4">
          <p className="font-semibold min-w-[5rem]">Rest</p>
          <p>Ensure that you are taking rest days where necessary</p>
        </li>
        <li className="flex gap-4">
          <p className="font-semibold min-w-[5rem]">Reps</p>
          <p>
            Every rep is a pause rep following a{" "}
            <abbr
              title="2 seconds down - 2 seconds pause - 2 seconds up"
              className="cursor-help underline decoration-dotted"
            >
              2 - 2 - 2 tempo
            </abbr>
          </p>
        </li>
        <li className="flex gap-4">
          <p className="font-semibold min-w-[5rem]">Weight*</p>
          <p>
            Select the maximum weight that allows you to complete the set with
            good form
          </p>
        </li>
      </ul>

      <small className="block mt-2 italic text-gray-600 text-base">
        * The first and second set should be at 75% and 85% of your working
        weight used for the last two sets.
      </small>

      <h3 className="text-lg sm:text-xl font-semibold mt-10">
        The Training Plan
      </h3>

      <p className="text-base sm:text-lg mb-2">
        This training plan uses a structure known as the <b>Bro Split</b>, and
        follows this rotation ⬇️
      </p>

      <p className="text-base sm:text-lg font-semibold italic mb-6">
        Push &rarr; Pull &rarr; Legs &rarr; Repeat
      </p>

      <p className="text-base sm:text-lg">
        Complete all of the workouts below and track your progress along the way
        ✅
      </p>
    </div>
  );
};

export default Hero;

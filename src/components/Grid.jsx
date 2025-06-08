import React from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard.jsx";

const Grid = () => {
  const isLocked = false;
  const selectedWorkout = 3;

  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto py-4 px-4 sm:px-6 lg:px-8">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs";

        const dayNumber =
          workoutIndex < 9 ? "0" + (workoutIndex + 1) : workoutIndex + 1;

        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell"></i>
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging"></i>
          ) : (
            <i className="fa-solid fa-bolt"></i>
          );

        const trainingPlan = training_plan[workoutIndex];

        if (selectedWorkout === workoutIndex) {
          return (
            <WorkoutCard
              key={workoutIndex}
              workoutIndex={workoutIndex}
              type={type}
              trainingPlan={trainingPlan}
              dayNumber={dayNumber}
              icon={icon}
            />
          );
        }

        return (
          <button
            key={workoutIndex}
            className={
              "relative w-[140px] h-[110px] border border-slate-300 rounded-xl px-4 py-2 bg-white text-left shadow-sm transition-all duration-300 ease-in-out group " +
              (isLocked
                ? "opacity-60 cursor-not-allowed"
                : "hover:scale-[1.05] hover:shadow-xl hover:border-slate-400")
            }
          >
            <p className="absolute top-2 left-2 text-[11px] text-slate-500 font-medium tracking-wide">
              Day {dayNumber}
            </p>

            <div className="absolute top-2 right-2 text-[13px] text-slate-600 transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110">
              {isLocked ? <i className="fa-solid fa-lock"></i> : icon}
            </div>

            <div className="absolute bottom-4 left-3">
              <h4 className="text-[17px] font-bold tracking-tight text-slate-800 transition-all duration-300 ease-in-out group-hover:bg-gradient-to-tr from-[#00FFE0] via-[#7F00FF] to-[#FF4D4D] group-hover:bg-clip-text group-hover:text-transparent">
                {type}
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Grid;

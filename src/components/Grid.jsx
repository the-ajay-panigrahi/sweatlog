import React, { useContext, useEffect, useState } from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard.jsx";
import { ThemeContext } from "../utils/theme-context.jsx";

const Grid = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const completedWorkouts = Object.keys(savedWorkouts || {}).filter(
    (workout) => {
      const entry = savedWorkouts[workout];
      return entry.isComplete;
    }
  );

  function handleSave(index, data) {
    const newObject = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || savedWorkouts?.[index]?.isComplete,
      },
    };

    setSavedWorkouts(newObject);
    localStorage.setItem("sweatLog", JSON.stringify(newObject));
    setSelectedWorkout(null);
  }

  function handleComplete(index, data) {
    const newObject = { ...data };
    newObject.isComplete = true;
    handleSave(index, newObject);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let savedData = {};
    if (localStorage.getItem("sweatLog")) {
      savedData = JSON.parse(localStorage.getItem("sweatLog"));
    }
    setSavedWorkouts(savedData);
  }, []);

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {Object.keys(training_plan).map((workout, workoutIndex) => {
          const isLocked =
            workoutIndex === 0
              ? false
              : !completedWorkouts.includes(`${workoutIndex - 1}`);

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
                handleSave={handleSave}
                handleComplete={handleComplete}
                savedWeights={savedWorkouts?.[workoutIndex]?.weights}
              />
            );
          }

          return (
            <button
              onClick={() => {
                if (isLocked) {
                  return;
                }
                setSelectedWorkout(workoutIndex);
              }}
              key={workoutIndex}
              className={`
                relative w-[140px] h-[110px] rounded-xl px-4 py-2 text-left shadow-sm transition-all duration-300 ease-in-out group
                ${
                  isLocked
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-[1.05] hover:shadow-xl hover:border-slate-400"
                }
                ${
                  isDarkMode
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-white border border-slate-300"
                }
              `}
            >
              <p
                className={`absolute top-2 left-2 text-[11px] font-medium tracking-wide transition-colors duration-300 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Day {dayNumber}
              </p>

              <div
                className={`absolute top-2 right-2 text-[13px] transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110 ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {isLocked ? <i className="fa-solid fa-lock"></i> : icon}
              </div>

              <div className="absolute bottom-4 left-3">
                <h4
                  className={`text-[17px] font-bold tracking-tight transition-all duration-300 ease-in-out group-hover:bg-gradient-to-tr from-[#00FFE0] via-[#7F00FF] to-[#FF4D4D] group-hover:bg-clip-text group-hover:text-transparent
                    ${isDarkMode ? "text-white" : "text-slate-800"}
                  `}
                >
                  {type}
                </h4>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;

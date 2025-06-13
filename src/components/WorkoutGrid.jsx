import React, { useContext, useEffect, useState } from "react";
import { workoutProgram as training_plan } from "../utils";
import WorkoutCard from "./WorkoutCard";
import { ThemeContext } from "../contexts/theme-context";

const WorkoutGrid = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [savedWorkouts, setSavedWorkouts] = useState({});
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const completedWorkouts = Object.keys(savedWorkouts).filter(
    (key) => savedWorkouts[key]?.isComplete
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sweatLog")) || {};
    setSavedWorkouts(data);
  }, []);

  const handleSave = (index, data) => {
    const updated = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: data.isComplete || savedWorkouts?.[index]?.isComplete,
      },
    };
    setSavedWorkouts(updated);
    localStorage.setItem("sweatLog", JSON.stringify(updated));
    setSelectedWorkout(null);
  };

  const handleComplete = (index, data) => {
    handleSave(index, { ...data, isComplete: true });
  };

  const bgClass = isDarkMode ? "bg-slate-950" : "bg-white";

  return (
    <div className={`transition-colors duration-300 ${bgClass}`}>
      <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto py-4 px-4 sm:px-6 lg:px-8">
        {Object.keys(training_plan).map((workout, index) => {
          const isLocked =
            index > 0 && !completedWorkouts.includes(`${index - 1}`);
          const type = ["Push", "Pull", "Legs"][index % 3];
          const dayNumber = String(index + 1).padStart(2, "0");
          const icon = [
            <i className="fa-solid fa-dumbbell" />,
            <i className="fa-solid fa-weight-hanging" />,
            <i className="fa-solid fa-bolt" />,
          ][index % 3];

          if (selectedWorkout === index) {
            return (
              <WorkoutCard
                key={index}
                workoutIndex={index}
                type={type}
                trainingPlan={training_plan[index]}
                dayNumber={dayNumber}
                icon={icon}
                handleSave={handleSave}
                handleComplete={handleComplete}
                savedWeights={savedWorkouts?.[index]?.weights}
              />
            );
          }

          return (
            <button
              key={index}
              onClick={() => !isLocked && setSelectedWorkout(index)}
              className={`relative w-[140px] h-[110px] rounded-xl px-4 py-2 text-left shadow-sm group transition-all duration-300
                ${
                  isLocked
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:scale-[1.05] hover:shadow-xl"
                }
                ${
                  isDarkMode
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-white border border-slate-300"
                }
              `}
            >
              <p
                className={`absolute top-2 left-2 text-[11px] font-medium ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Day {dayNumber}
              </p>
              <div
                className={`absolute top-2 right-2 text-[13px] ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                } group-hover:rotate-12 group-hover:scale-110`}
              >
                {isLocked ? <i className="fa-solid fa-lock" /> : icon}
              </div>
              <div className="absolute bottom-4 left-3">
                <h4
                  className={`text-[17px] font-bold tracking-tight ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  } group-hover:bg-gradient-to-tr from-[#00FFE0] via-[#7F00FF] to-[#FF4D4D] group-hover:bg-clip-text group-hover:text-transparent`}
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

export default WorkoutGrid;

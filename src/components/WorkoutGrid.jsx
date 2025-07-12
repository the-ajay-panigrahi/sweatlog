import { useEffect, useState } from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = () => {
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  const completedWorkouts = Object.keys(savedWorkouts || {}).filter(
    (workouts) => {
      return savedWorkouts[workouts].isComplete;
    }
  );
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  function handleSave(index, data) {
    // save to local storage and modify the saved workout state
    const newObject = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isComplete: !!data.isComplete || !!savedWorkouts?.[index]?.isComplete,
      },
    };
    setSavedWorkouts(newObject);
    localStorage.setItem("sweatlog", JSON.stringify(newObject));
    setSelectedWorkout(null);
  }
  function handleComplete(index, data) {
    //  complete a workout (so basically we modify the completed status)
    const newObject = { ...data };
    newObject.isComplete = true;
    handleSave(index, newObject);
  }

  useEffect(() => {
    if (!localStorage) return;
    let savedData = {};
    if (localStorage.getItem("sweatlog")) {
      savedData = JSON.parse(localStorage.getItem("sweatlog"));
    }
    setSavedWorkouts(savedData);
  }, []);

  return (
    <section className="w-full bg-white dark:bg-[#0a0a0c] transition-colors duration-300 pb-12 px-4 pt-5 sm:pt-2">
      <div className="max-w-[700px] mx-auto sm:px-4">
        <div className="flex justify-center items-center">
          <h2 className="text-sm sm:text-base font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-[2px] rounded-full inline-block mb-6">
            Your 30-Day Workout Plan
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {Object.keys(training_plan).map((_, workoutIndex) => {
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

            const iconClass =
              workoutIndex % 3 === 0
                ? "fa-dumbbell"
                : workoutIndex % 3 === 1
                ? "fa-weight-hanging"
                : "fa-bolt";

            const trainingPlan = training_plan[workoutIndex];

            const dayNum =
              workoutIndex + 1 <= 9
                ? "0" + (workoutIndex + 1)
                : workoutIndex + 1;

            if (selectedWorkout === workoutIndex) {
              return (
                <WorkoutCard
                  key={workoutIndex}
                  workoutIndex={workoutIndex}
                  trainingPlan={trainingPlan}
                  type={type}
                  dayNum={dayNum}
                  iconClass={iconClass}
                  handleSave={handleSave}
                  handleComplete={handleComplete}
                  savedWeights={savedWorkouts?.[workoutIndex]?.weights}
                />
              );
            }

            return (
              <button
                key={workoutIndex}
                disabled={isLocked}
                className={`rounded-xl px-4 py-4 text-left border border-zinc-300 dark:border-zinc-800
                  bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800
                  transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-[2px] cursor-pointer
                  disabled:opacity-60 disabled:cursor-not-allowed`}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                onClick={() => {
                  if (isLocked) return;
                  setSelectedWorkout(workoutIndex);
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold tracking-tight text-zinc-700 dark:text-zinc-300">
                    Day {dayNum}
                  </span>
                  <i
                    className={`fa-solid ${
                      isLocked ? "fa-lock" : iconClass
                    } text-transparent bg-clip-text 
                    bg-gradient-to-r ${
                      isLocked
                        ? "from-indigo-500 to-blue-400"
                        : "from-indigo-600 to-pink-500 dark:from-fuchsia-500 dark:to-cyan-400"
                    }`}
                  />
                </div>

                <p
                  className={`text-base sm:text-lg font-semibold inline-block bg-clip-text text-transparent ${
                    type === "Push"
                      ? "bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-fuchsia-500 dark:to-cyan-400"
                      : type === "Pull"
                      ? "bg-gradient-to-r from-blue-600 to-purple-500 dark:from-cyan-400 dark:to-indigo-500"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 dark:from-pink-500 dark:to-purple-400"
                  }`}
                >
                  {type}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkoutGrid;

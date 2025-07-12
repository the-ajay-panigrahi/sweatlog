import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utils/index.js";

const WorkoutCard = ({
  workoutIndex,
  trainingPlan,
  type,
  dayNum,
  iconClass,
  savedWeights,
  handleSave,
  handleComplete,
}) => {
  const { warmup, workout } = trainingPlan;
  const [showExerciseDescription, setShowExerciseDescription] = useState(null);

  const [weights, setWeights] = useState(savedWeights || {});

  function handleAddWeight(title, weight) {
    const newObject = {
      ...weights,
      [title]: weight,
    };
    setWeights(newObject);
  }

  return (
    <div
      className="col-span-2 sm:col-span-3 w-full rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg dark:shadow-zinc-800 px-4 sm:px-6 py-6 space-y-6"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Day {dayNum}
          </p>
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
            {type} Workout
          </h2>
        </div>
        <i
          className={`fa-solid ${iconClass} text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-fuchsia-500 dark:to-cyan-400`}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-zinc-700 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1">
          Warmup
        </h3>
        <div className="grid grid-cols-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <span>Exercise</span>
          <span className="text-center">Sets</span>
          <span className="text-center">Reps</span>
          <span className="text-center">Max Weight</span>
        </div>
        {warmup.map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-4 items-center text-sm py-2 border-b border-zinc-100 dark:border-zinc-800"
          >
            <div className="flex items-center gap-2 group">
              <p className="text-zinc-700 dark:text-zinc-100">
                {i + 1}. {ex.name}
              </p>
              <button
                className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 
                transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setShowExerciseDescription({
                    // name: Object.keys(exerciseDescriptions)[i],
                    name: ex.name,
                    description: exerciseDescriptions[ex.name],
                  });
                }}
              >
                <i className="fa-regular fa-circle-question text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300" />
              </button>
            </div>
            <p className="text-center text-zinc-600 dark:text-zinc-300">
              {ex.sets}
            </p>
            <p className="text-center text-zinc-600 dark:text-zinc-300">
              {ex.reps}
            </p>
            <input
              type="text"
              placeholder="N/A"
              disabled
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded px-2 py-1 text-center cursor-not-allowed"
            />
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-zinc-700 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1">
          Workout
        </h3>
        <div className="grid grid-cols-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <span>Exercise</span>
          <span className="text-center">Sets</span>
          <span className="text-center">Reps</span>
          <span className="text-center">Max Weight</span>
        </div>
        {workout.map((ex, i) => (
          <div
            key={i}
            className="grid grid-cols-4 items-center text-sm py-2 border-b border-zinc-100 dark:border-zinc-800"
          >
            <div className="flex items-center gap-[7px] group">
              <p className="text-zinc-700 dark:text-zinc-100">
                {i + 1}. {ex.name}
              </p>
              <button
                className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 
                transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setShowExerciseDescription({
                    name: ex.name,
                    description: exerciseDescriptions[ex.name],
                  });
                }}
              >
                <i className="fa-regular fa-circle-question text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300" />
              </button>
            </div>
            <p className="text-center text-zinc-600 dark:text-zinc-300">
              {ex.sets}
            </p>
            <p className="text-center text-zinc-600 dark:text-zinc-300">
              {ex.reps}
            </p>
            <input
              type="number"
              placeholder="14"
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded px-2 py-1 text-center"
              value={weights[ex.name] || ""}
              onChange={(event) => {
                handleAddWeight(ex.name, event.target.value);
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 font-medium px-4 py-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 transition cursor-pointer"
          onClick={() => {
            handleSave(workoutIndex, { weights });
          }}
        >
          Save & Exit
        </button>
  
        <button
          disabled={Object.keys(weights).length !== workout.length}
          className=" dark:from-fuchsia-500 dark:to-cyan-400  px-4 py-2 rounded opacity-60 disabled:cursor-not-allowed font-medium bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:opacity-90 cursor-pointer"
          onClick={() => {
            handleComplete(workoutIndex, { weights });
          }}
        >
          {/* <i className="fa-solid fa-check" /> */}
          Complete
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;

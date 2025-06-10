import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utils";
import { ThemeContext } from "../utils/theme-context";

const WorkoutCard = ({
  trainingPlan,
  type,
  workoutIndex,
  dayNumber,
  icon,
  savedWeights,
  handleSave,
  handleComplete,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { warmup, workout } = trainingPlan || {};
  const [showExerciseDescription, setShowExerciseDescription] = useState(null);
  const [weights, setWeights] = useState(savedWeights || {});

  function handleAddWeight(title, weight) {
    const newObject = { ...weights, [title]: weight };
    setWeights(newObject);
  }

  const areAllWorkoutExercisesCompleted = workout.every((ex) => {
    return weights[ex.name] && weights[ex.name].trim() !== "";
  });

  return (
    <div
      className={`
        max-w-[900px] mx-auto p-4 rounded-xl shadow-xl border transition-colors duration-300
        ${
          isDarkMode
            ? "bg-slate-950 border-slate-700"
            : "bg-white border-slate-200"
        }
      `}
    >
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}

      <div className="flex justify-between items-center mb-4">
        <p
          className={`text-sm transition-colors duration-300 ${
            isDarkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Day {dayNumber}
        </p>
        <div
          className={`text-xl transition-colors duration-300 ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {icon}
        </div>
      </div>

      <h2
        className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-slate-800"
        }`}
      >
        {type} Workout
      </h2>

      <div className="mb-6">
        <h4
          className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
            isDarkMode ? "text-slate-200" : "text-slate-700"
          }`}
        >
          Warmup
        </h4>
        <div
          className={`grid grid-cols-4 gap-3 text-sm font-medium mb-2 transition-colors duration-300 ${
            isDarkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <p>Exercise</p>
          <p>Sets</p>
          <p>Reps</p>
          <p>Max Weight</p>
        </div>
        {warmup.map((ex, idx) => (
          <div
            key={idx}
            className={`
              grid grid-cols-4 gap-3 items-center text-sm py-1 group transition-colors duration-300
              ${
                isDarkMode
                  ? "border-t border-slate-800"
                  : "border-t border-slate-100"
              }
            `}
          >
            <div className="flex items-center gap-2 relative">
              <span
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {idx + 1}. {ex.name}
              </span>
              <button
                onClick={() => {
                  setShowExerciseDescription({
                    name: ex.name,
                    description: exerciseDescriptions[ex.name],
                  });
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <i className="fa-regular fa-circle-question text-slate-400 hover:text-indigo-500 cursor-pointer"></i>
              </button>
            </div>
            <p
              className={`ml-2 transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {ex.sets}
            </p>
            <p
              className={`ml-2 transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {ex.reps}
            </p>
            <input
              type="text"
              disabled
              placeholder="N/A"
              className={`
                rounded px-2 py-1 w-full cursor-not-allowed transition-colors duration-300
                ${
                  isDarkMode
                    ? "bg-slate-800 text-slate-400"
                    : "bg-slate-100 text-slate-500"
                }
              `}
            />
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h4
          className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
            isDarkMode ? "text-slate-200" : "text-slate-700"
          }`}
        >
          Workout
        </h4>
        <div
          className={`grid grid-cols-4 gap-3 text-sm font-medium mb-2 transition-colors duration-300 ${
            isDarkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <p>Exercise</p>
          <p>Sets</p>
          <p>Reps</p>
          <p>Max Weight</p>
        </div>
        {workout.map((ex, idx) => (
          <div
            key={idx}
            className={`
              grid grid-cols-4 gap-3 items-center text-sm py-1 group transition-colors duration-300
              ${
                isDarkMode
                  ? "border-t border-slate-800"
                  : "border-t border-slate-100"
              }
            `}
          >
            <div className="flex items-center gap-2 relative">
              <span
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {idx + 1}. {ex.name}
              </span>
              <button
                onClick={() => {
                  setShowExerciseDescription({
                    name: ex.name,
                    description: exerciseDescriptions[ex.name],
                  });
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <i className="fa-regular fa-circle-question text-slate-400 hover:text-indigo-500 cursor-pointer"></i>
              </button>
            </div>
            <p
              className={`ml-2 transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {ex.sets}
            </p>
            <p
              className={`ml-2 transition-colors duration-300 ${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {ex.reps}
            </p>
            <input
              value={weights[ex.name] || ""}
              onChange={(event) => {
                handleAddWeight(ex.name, event.target.value);
              }}
              type="text"
              placeholder="10"
              className={`
                border rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus-within:ring-indigo-500 transition-colors duration-300
                ${
                  isDarkMode
                    ? "border-slate-600 bg-slate-700 text-white"
                    : "border-slate-300 bg-white text-slate-900"
                }
                ${
                  isDarkMode ? "focus:ring-indigo-400" : "focus:ring-indigo-500"
                }
              `}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => {
            handleSave(workoutIndex, { weights });
          }}
          className={`
            px-4 py-2 rounded transition-colors duration-300 cursor-pointer
            ${
              isDarkMode
                ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }
          `}
        >
          Save & Exit
        </button>
        <button
          onClick={() => {
            handleComplete(workoutIndex, { weights });
          }}
          disabled={!areAllWorkoutExercisesCompleted}
          className={`
            px-4 py-2 rounded text-white transition-colors duration-200
            ${
              areAllWorkoutExercisesCompleted
                ? "bg-indigo-700 hover:bg-indigo-800 cursor-pointer"
                : "bg-indigo-500 opacity-50 cursor-not-allowed"
            }
          `}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;

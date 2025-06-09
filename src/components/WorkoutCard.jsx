import React, { useState } from "react";
import Modal from "./Modal";
import { exerciseDescriptions } from "../utils";

const WorkoutCard = ({ trainingPlan, type, workoutIndex, dayNumber, icon }) => {
  const { warmup, workout } = trainingPlan || {};
  const [showExerciseDescription, setShowExerciseDescription] = useState(null);

  return (
    <div className="max-w-[900px] mx-auto p-4 rounded-xl shadow-xl border border-slate-200 bg-white">
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => {setShowExerciseDescription(null)}}
        />
      )}

      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-slate-500">Day {dayNumber}</p>
        <div className="text-xl text-slate-600">{icon}</div>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-6">{type} Workout</h2>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-slate-700">Warmup</h4>
        <div className="grid grid-cols-4 gap-3 text-sm font-medium text-slate-600 mb-2">
          <p>Exercise</p>
          <p>Sets</p>
          <p>Reps</p>
          <p>Max Weight</p>
        </div>
        {warmup.map((ex, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 gap-3 items-center text-sm py-1 border-t border-slate-100 group"
          >
            <div className="flex items-center gap-2 relative">
              <span>
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
            <p className="ml-2">{ex.sets}</p>
            <p className="ml-2">{ex.reps}</p>
            <input
              type="text"
              disabled
              placeholder="N/A"
              className="bg-slate-100 rounded px-2 py-1 w-full text-slate-500 cursor-not-allowed"
            />
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2 text-slate-700">Workout</h4>
        <div className="grid grid-cols-4 gap-3 text-sm font-medium text-slate-600 mb-2">
          <p>Exercise</p>
          <p>Sets</p>
          <p>Reps</p>
          <p>Max Weight</p>
        </div>
        {workout.map((ex, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 gap-3 items-center text-sm py-1 border-t border-slate-100 group"
          >
            <div className="flex items-center gap-2 relative">
              <span>
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
            <p className="ml-2">{ex.sets}</p>
            <p className="ml-2">{ex.reps}</p>
            <input
              type="text"
              placeholder="10"
              className="border border-slate-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="px-4 py-2 rounded bg-slate-200 text-slate-700 hover:bg-slate-300 transition cursor-pointer">
          Save & Exit
        </button>
        <button
          disabled
          className="px-4 py-2 rounded bg-indigo-500 text-white opacity-50 cursor-not-allowed"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;

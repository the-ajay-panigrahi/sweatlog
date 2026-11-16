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
    <div className="workout-detail">
      {showExerciseDescription && (
        <Modal
          showExerciseDescription={showExerciseDescription}
          handleCloseModal={() => {
            setShowExerciseDescription(null);
          }}
        />
      )}

      <div className="detail-heading">
        <div>
          <p className="detail-day">Day {dayNum}</p>
          <h2 className="detail-title">{type} Workout</h2>
        </div>
        <i className={`fa-solid ${iconClass} detail-icon`} />
      </div>

      <div className="exercise-block">
        <h3 className="block-title">Warmup</h3>
        <div className="exercise-columns column-labels">
          <span>Exercise</span>
          <span className="center">Sets</span>
          <span className="center">Reps</span>
          <span className="center">Max Weight</span>
        </div>
        {warmup.map((ex, i) => (
          <div key={i} className="exercise-columns exercise-row">
            <div className="exercise-name">
              <p className="exercise-text">
                {i + 1}. {ex.name}
              </p>
              <button
                aria-label={`Description: ${ex.name}`}
                className="info-button"
                onClick={() => {
                  setShowExerciseDescription({
                    // name: Object.keys(exerciseDescriptions)[i],
                    name: ex.name,
                    description: exerciseDescriptions[ex.name],
                  });
                }}
              >
                <i className="fa-regular fa-circle-question" />
              </button>
            </div>
            <p className="center">{ex.sets}</p>
            <p className="center">{ex.reps}</p>
            <input
              type="text"
              placeholder="N/A"
              disabled
              className="weight-input"
            />
          </div>
        ))}
      </div>

      <div className="exercise-block">
        <h3 className="block-title">Workout</h3>
        <div className="exercise-columns column-labels">
          <span>Exercise</span>
          <span className="center">Sets</span>
          <span className="center">Reps</span>
          <span className="center">Max Weight</span>
        </div>
        {workout.map((ex, i) => (
          <div key={i} className="exercise-columns exercise-row">
            <div className="exercise-name">
              <p className="exercise-text">
                {i + 1}. {ex.name}
              </p>
              <button
                aria-label={`Description: ${ex.name}`}
                className="info-button"
                onClick={() => {
                  setShowExerciseDescription({
                    name: ex.name,
                    description: exerciseDescriptions[ex.name],
                  });
                }}
              >
                <i className="fa-regular fa-circle-question" />
              </button>
            </div>
            <p className="center">{ex.sets}</p>
            <p className="center">{ex.reps}</p>
            <input
              type="number"
              placeholder="14"
              aria-label={`Max Weight: ${ex.name}`}
              className="weight-input"
              value={weights[ex.name] || ""}
              onChange={(event) => {
                handleAddWeight(ex.name, event.target.value);
              }}
            />
          </div>
        ))}
      </div>

      <div className="detail-actions">
        <button
          className="secondary-button"
          onClick={() => {
            handleSave(workoutIndex, { weights });
          }}
        >
          Save & Exit
        </button>

        <button
          disabled={Object.keys(weights).length !== workout.length}
          className="primary-button"
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

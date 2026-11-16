import { useEffect, useState } from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = () => {
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  const completedWorkouts = Object.keys(savedWorkouts || {}).filter(
    (workouts) => {
      return savedWorkouts[workouts].isComplete;
    },
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
    <section className="workouts">
      <div className="shell">
        <div className="workout-heading">
          <h2 className="section-heading">Your 30-Day Workout Plan</h2>
        </div>
        <div className="workout-grid">
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
                className="day-card"
                onClick={() => {
                  if (isLocked) return;
                  setSelectedWorkout(workoutIndex);
                }}
              >
                <div className="day-heading">
                  <span className="day-label">Day {dayNum}</span>
                  <i
                    className={`fa-solid ${isLocked ? "fa-lock" : iconClass}`}
                  />
                </div>

                <p className="workout-type">{type}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkoutGrid;

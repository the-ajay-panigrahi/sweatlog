import React from "react";

const WorkoutCard = ({
  workoutIndex,
  trainingPlan,
  type,
  dayNum,
  iconClass,
}) => {
  const { warmup, workout } = trainingPlan;

  return (
    <div>
      <div>
        <div>
          <p>Day {dayNum}</p>
          <i
            className={`fa-solid ${iconClass} text-transparent bg-clip-text 
                    bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-fuchsia-500 dark:to-cyan-400`}
          />
        </div>
        <div>
          <h2>
            <b>{type} Workout</b>
          </h2>
        </div>
      </div>

      <div>
        <h4>Warmup</h4>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6>Max Weight</h6>
        {warmup.map((warmupExercise, warmupIndex) => {
          return (
            <React.Fragment key={warmupIndex}>
              <div>
                <p>
                  {warmupIndex + 1}. {warmupExercise.name}
                </p>
                <button>
                  <i className="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <p>{warmupExercise.sets}</p>
              <p>{warmupExercise.reps}</p>
              <input type="text" placeholder="N/A" disabled />
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <h4>Workout</h4>
        <h6>Sets</h6>
        <h6>Reps</h6>
        <h6>Max Weight</h6>
        {workout.map((workoutExercise, workoutIndex) => {
          return (
            <React.Fragment key={workoutIndex}>
              <div>
                <p>
                  {workoutIndex + 1}. {workoutExercise.name}
                </p>
                <button>
                  <i className="fa-regular fa-circle-question"></i>
                </button>
              </div>
              <p>{workoutExercise.sets}</p>
              <p>{workoutExercise.reps}</p>
              <input type="text" placeholder="14" />
            </React.Fragment>
          );
        })}
      </div>

      <div>
        <button>Save & Exit</button>
        <button disabled={true}>Complete</button>
      </div>
    </div>
  );
};

export default WorkoutCard;

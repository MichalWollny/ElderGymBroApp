import React from 'react';
import useFetchData from '../utils/FetchData';

// ignore it for now, its nonsense I tried on a whim

const Workouts = () => {
  const { hardcodedWorkouts, isLoading } = useFetchData();
  console.log(hardcodedWorkouts);
  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {hardcodedWorkouts.map((workouts, index) => (
              <li key={workouts.id}>
                <ul>
                  {workouts.workoutName}
                  <li>{workouts.workoutAim}</li>
                  <li>{workouts.workoutDuration}</li>
                  <li>{workouts.workoutBreakDuration}</li>
                  <li>{workouts.workoutLevel}</li>
                  <li>{workouts.workoutPlanDuration}</li>
                  <li>{workouts.workoutFrequency}</li>
                  <ul>
                    {workouts.workoutTips.map((tips, index) => (
                      <li key={index}>{tips}</li>
                    ))}
                  </ul>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Workouts;

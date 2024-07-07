import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../context/useAuth';

const ActiveWorkout = () => {
  const { userData, isLoggedIn, setIsLoggedIn } = useAuth();

  const [activeWorkout, setActiveWorkout] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/me/workouttracking/getActiveWorkout`, {
          withCredentials: true,
        });
        setActiveWorkout(response.data.activeWorkout);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    getActiveWorkout();
  }, []);

  // Ensure workouts is an array before attempting to map over it
  // const validWorkouts = activeWorkout;
  // console.log(validWorkouts);

  // State to manage expanded/collapsed state of exercises and tips
  const [expandedPlan, setExpandedPlan] = useState(null);
  const togglePlan = () => {
    setExpandedPlan(!expandedPlan);
  };
  const [expandedExercise, setExpandedExercise] = useState(null);
  // // Function to toggle expanded exercise
  const toggleExercise = (workoutId, exerciseIndex) => {
    if (expandedExercise.workoutId === workoutId && expandedExercise.exerciseIndex === exerciseIndex) {
      setExpandedExercise(null); // Collapse if the same exercise is clicked again
    } else {
      setExpandedExercise({ workoutId, exerciseIndex }); // Expand the new exercise
    }
  };
  const [expandedTips, setExpandedTips] = useState(null);
  // // Function to toggle expanded tips
  const toggleTips = (workoutId, tipIndex) => {
    if (expandedTips.workoutId === workoutId && expandedTips.tipIndex === tipIndex) {
      setExpandedTips(null); // Collapse if the same tip is clicked again
    } else {
      setExpandedTips({ workoutId, tipIndex }); // Expand the new tip
    }
  };

  // const [expandedSplitDays, setExpandedSplitDays] = useState(null);

  return (
    // Background Container
    <div className="container mx-auto mb-8 flex min-h-svh flex-col items-center bg-gradient-to-br from-black to-blue-950 p-4">
      {/* --- */}

      <div className="mb-2 mt-2">
        <div className="w-90 card m-4 cursor-pointer rounded-lg border-4 border-solid border-teal-800 bg-zinc-800 p-2 shadow-md lg:card-side">
          <div>
            <button onClick={togglePlan} className="w-full text-left focus:outline-none">
              {/* Conditional rendering for the workout image */}
              {expandedPlan && (
                <div className="card max-w-screen-sm rounded-t-lg">
                  <img
                    src={`../src/assets/images/workouts/${activeWorkout.name}.jpg`}
                    alt={activeWorkout.name}
                    className="rounded-t-lg border-2 border-solid border-pink-800 shadow-lg"
                  />
                </div>
              )}
              <br />
              {/* Container Workout Titel */}
              <h5 className="mb-2 rounded-t-sm border-2 border-solid border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 p-2 pb-1 pt-1 text-center font-cthulhumbus text-3xl font-extrabold text-teal-500 shadow-2xl">
                {activeWorkout.name}
              </h5>
            </button>
            {/* Render Plans content */}
            {expandedPlan && (
              <div>
                <div className="mb-6 mt-2 rounded-t-lg border-0 border-b-0 border-pink-800 p-2">
                  <span className="font-extrabold text-teal-500">System: </span>
                  <span className="text-slate-300">{activeWorkout.system}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Aim: </span>
                  <span className="text-slate-300">{activeWorkout.aim}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Frequency: </span>
                  <span className="text-slate-300">{activeWorkout.frequency}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Workout Duration: </span>
                  <span className="text-slate-300">{activeWorkout.planDuration}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Rest Duration: </span>
                  <span className="text-slate-300">{activeWorkout.breakDuration}</span>
                  {activeWorkout.split ? (
                    <>
                      <br />
                      <span className="font-extrabold text-teal-500">Split: </span>
                      <span className="text-slate-300">Yes</span>
                      <br />
                    </>
                  ) : (
                    ''
                  )}
                  <br />
                  {/* Toggle Tips section/Tips Button*/}
                  <div className="flex justify-center">
                    <button onClick={() => toggleTips(workoutId, tipIndex)} className="w-full focus:outline-none">
                      <div className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                        <svg
                          className="size-8 text-teal-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                        {/* <p className="font-extrabold text-teal-500">
                              Tips
                            </p> */}
                      </div>
                    </button>
                  </div>
                </div>
                {/* Render Tips content  */}
                {expandedTips && expandedTips.workoutId === workoutId && expandedTips.tipIndex === index && (
                  <ul className="bg-zink-700 -mt-6 list-disc rounded-b-lg border-2 border-t-0 border-none border-pink-800 p-2 pl-6">
                    {activeWorkout.tips.map((tip, idx) => (
                      <li key={idx} className="text-slate-300">
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Render exercises for non-split plans and splits */}
                {(activeWorkout.exercises || activeWorkout.splits) && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {/* Render exercises for non-split plans */}
                    {!activeWorkout.split &&
                      activeWorkout.exercises &&
                      activeWorkout.exercises.map((exercise, exIndex) => (
                        <div
                          key={exercise.id}
                          className="mb-2 mt-2 rounded-lg border-4 border-solid border-teal-800 bg-zinc-700 p-2 pb-2 shadow-md">
                          {expandedExercise !== exIndex && <div className=""></div>}
                          <h6 className="mb-2 flex justify-center rounded-md border-0 border-pink-800 text-xl font-bold text-teal-500">
                            {exercise.name}
                          </h6>
                          <img
                            src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                            alt={exercise.name}
                            className="rounded-md"
                          />
                          {/* <div className="cursor-pointer rounded-md border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center"
                                onClick={() => toggleExercise(exIndex)}>
                                  
                                <h6 className="mt-2 rounded-md border-2 border-pink-800 text-lg font-bold text-teal-500">
                                  {exercise.name}
                                </h6>
                                
                              </div> */}

                          <div
                            className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center"
                            onClick={() => toggleExercise(workoutId, exerciseIndex)}>
                            <svg
                              className="size-8 text-teal-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                            {/* <p className="font-extrabold text-teal-500">
                              Tips
                            </p> */}
                          </div>
                          {/* Collapsible content for exercises */}
                          {expandedExercise &&
                            expandedExercise.workoutId === workoutId &&
                            expandedExercise.exerciseIndex === index && (
                              <div className="mt-2">
                                <span className="font-extrabold text-teal-500">Force: </span>
                                <span className="capitalize text-slate-300">{exercise.force}</span>
                                <br />
                                <span className="font-extrabold text-teal-500">Mechanic: </span>
                                <span className="capitalize text-slate-300">{exercise.mechanic}</span>
                                <br />
                                <span className="font-extrabold text-teal-500">Equipment: </span>
                                <span className="capitalize text-slate-300">{exercise.equipment}</span>
                                <br />
                                <span className="font-extrabold text-teal-500">Primary Muscles: </span>
                                <span className="capitalize text-slate-300">{exercise.primaryMuscles}</span>
                                <br />

                                {exercise.secondaryMuscles.length > 0 && (
                                  <>
                                    <span className="font-extrabold text-teal-500">Secondary Muscles: </span>
                                    <span className="capitalize text-slate-300">
                                      {exercise.secondaryMuscles.join(', ')}
                                    </span>
                                    <br />
                                  </>
                                )}
                                <h6 className="mt-2 font-extrabold text-teal-500">Instructions:</h6>
                                <ul className="list-disc pl-5">
                                  {exercise.instructions.map((instruction, instrIndex) => (
                                    <li key={instrIndex} className="text-sm text-slate-300">
                                      {instruction}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// PropType validation (optional but recommended)
// ActiveWorkout.propTypes = {
//   workouts: PropTypes.object,
// };

export default ActiveWorkout;

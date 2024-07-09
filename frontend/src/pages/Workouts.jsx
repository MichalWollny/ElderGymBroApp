import { useState } from 'react';
import PropTypes from 'prop-types';

// Import all images dynamically
const workoutImages = import.meta.glob('../assets/images/workouts/*.jpg', { eager: true });
const exerciseImages = import.meta.glob('../assets/images/Exercises/**/*.jpg', { eager: true });

const getImage = (images, name) => {
  const key = Object.keys(images).find((key) => key.includes(name.replace(/ /g, '_')));
  return key ? images[key].default : null;
};

const WorkoutPlan = ({ workouts }) => {
  const validWorkouts = Array.isArray(workouts) ? workouts : [];
  const [expandedExercise, setExpandedExercise] = useState(null);
  const [expandedTips, setExpandedTips] = useState(null);
  const [expandedPlans, setExpandedPlans] = useState(null);
  const [expandedSplitDays, setExpandedSplitDays] = useState(null);

  const toggleExercise = (index) => {
    setExpandedExercise(expandedExercise === index ? null : index);
  };

  const toggleTips = (index) => {
    setExpandedTips(expandedTips === index ? null : index);
  };

  const togglePlans = (index) => {
    setExpandedPlans(expandedPlans === index ? null : index);
  };

  const toggleSplitDays = (index) => {
    setExpandedSplitDays(expandedSplitDays === index ? null : index);
  };

  return (
    <div className="container mx-auto mb-8 flex min-h-svh flex-col items-center bg-gradient-to-br from-black to-blue-950 p-4">
      {validWorkouts.map((plan, index) => (
        <div key={plan.id} className="mb-2 mt-2">
          <div className="w-90 card m-4 cursor-pointer rounded-lg border-4 border-solid border-teal-800 bg-zinc-800 p-2 shadow-md ">
            {/* Main Plan Header */}
            <div className="w-full text-left focus:outline-none">
              {expandedPlans !== index && (
                <div className="max-w-screen-sm rounded-t-lg ">
                  <h5 className="mb-2 rounded-t-sm pb-1 text-center font-cthulhumbus text-xl font-bold text-teal-500 shadow-2xl">
                    {plan.name}
                  </h5>
                  <img src={getImage(workoutImages, plan.name)} alt={plan.name} className="rounded-t-lg shadow-lg" />
                  <div onClick={() => togglePlans(index)} className="w-full focus:outline-none transition duration-150 ease-in-out">
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
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Expanded Plan Details */}
            {expandedPlans === index && (
              <div className="max-w-screen-sm transform overflow-hidden rounded-t-lg transition-all duration-1000 ease-in-out">
                <h5 className="mb-2 rounded-t-sm to-zinc-900 pb-1 text-center font-cthulhumbus text-xl font-extrabold text-teal-500 shadow-2xl">
                  {plan.name}
                </h5>
                <img src={getImage(workoutImages, plan.name)} alt={plan.name} className="" />
                <div onClick={() => togglePlans(index)} className="w-full focus:outline-none">
                  <div className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                    <svg
                      className="size-8 text-teal-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  </div>
                </div>

                {/* Plan Info */}
                <div className="mb-6 mt-2 rounded-t-lg border-0 border-b-0 border-pink-800 p-2">
                  <span className="font-extrabold text-teal-500">System: </span>
                  <span className="text-slate-300">{plan.system}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Aim: </span>
                  <span className="text-slate-300">{plan.aim}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Frequency: </span>
                  <span className="text-slate-300">{plan.frequency}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Workout Duration: </span>
                  <span className="text-slate-300">{plan.planDuration}</span>
                  <br />
                  <span className="font-extrabold text-teal-500">Rest Duration: </span>
                  <span className="text-slate-300">{plan.breakDuration}</span>
                  {plan.split ? (
                    <>
                      <br />
                      <span className="font-extrabold text-teal-500">Split: </span>
                      <span className="text-slate-300">Yes</span>
                      <br />
                    </>
                  ) : (
                    ''
                  )}
                  <div className="flex justify-center text-center">
                    <div onClick={() => toggleTips(index)} className="w-full focus:outline-none"></div>
                  </div>
                </div>

                {/* Tips Section */}
                {expandedTips === index && (
                  <ul className="bg-zink-700 -mt-6 list-disc rounded-b-lg border-2 border-t-0 border-none border-pink-800 p-2 pl-6">
                    {plan.tips.map((tip, idx) => (
                      <li key={idx} className="text-slate-300">
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Exercises and Splits Section */}
                {(plan.exercises || plan.splits) && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {!plan.split &&
                      plan.exercises &&
                      plan.exercises.map((exercise, exIndex) => (
                        <div
                          key={exercise.id}
                          className="mb-2 mt-2 rounded-lg border-4 border-solid border-teal-800 bg-zinc-700 p-2 pb-2 shadow-md">
                          {expandedExercise !== exIndex && (
                            <div className="">
                              <h6 className="mb-2 flex justify-center rounded-md border-0 border-pink-800 text-base font-bold text-teal-500">
                                {exercise.name}
                              </h6>
                              <img
                                src={getImage(exerciseImages, exercise.name)}
                                alt={exercise.name}
                                className="rounded-md"
                              />
                              <div onClick={() => toggleExercise(exIndex)} className="w-full focus:outline-none">
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
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Expanded Exercise Details */}
                          {expandedExercise === exIndex && (
                            <div className="transform overflow-hidden transition-all duration-1000 ease-in-out">
                              <h6 className="mb-2 flex justify-center rounded-md border-0 border-pink-800 text-base font-bold text-teal-500">
                                {exercise.name}
                              </h6>
                              <img
                                src={getImage(exerciseImages, exercise.name)}
                                alt={exercise.name}
                                className="rounded-md"
                              />
                              <div onClick={() => toggleExercise(exIndex)} className="w-full focus:outline-none">
                                <div className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                                  <svg
                                    className="size-8 text-teal-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                  </svg>
                                </div>
                              </div>
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

                    {/* Split Days */}
                    {plan.split &&
                      plan.splits.map((split, splitIndex) => (
                        <div
                          key={splitIndex}
                          className="mb-2 mt-2 rounded-lg border-4 border-teal-800 bg-zinc-700 p-4 shadow-md">
                          <div className="w-full cursor-pointer text-left focus:outline-none">
                            <h6 className="text-center font-cthulhumbus text-xl font-semibold capitalize text-teal-500">
                              Day {split.day}
                            </h6>
                            <div className="w-full focus:outline-none">
                              <div
                                onClick={() => toggleSplitDays(splitIndex)}
                                className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                                <svg
                                  className={`size-8 transform text-teal-500 ${
                                    expandedSplitDays === splitIndex ? 'rotate-180' : 'rotate-0'
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Expanded Split Day Details */}
                          {expandedSplitDays === splitIndex && (
                            <div className="transform overflow-hidden transition-all duration-1000 ease-in-out">
                              {split.muscleGroups.map((group, groupIndex) => (
                                <div key={groupIndex} className="mb-2 mt-2">
                                  <div className="container rounded-lg">
                                    {group.exercises.map((exercise, exerciseIndex) => {
                                      const fullExercise = plan.exercises.find((e) => e.id === exercise.id);

                                      return (
                                        <div key={exerciseIndex} className="mb-3 mt-3">
                                          <div className="text-slate-300">
                                            {expandedExercise !== exerciseIndex && (
                                              <div className="max-w-screen-sm">
                                                <div className="flex flex-row items-center justify-between">
                                                  <h6 className="mt-4 rounded-md text-lg font-bold text-teal-500">
                                                    {fullExercise.name}
                                                  </h6>
                                                </div>
                                                <img
                                                  src={getImage(exerciseImages, exercise.name)}
                                                  alt={exercise.name}
                                                  className=""
                                                />
                                                <div className="w-full focus:outline-none">
                                                  <div
                                                    onClick={() => toggleExercise(exerciseIndex)}
                                                    className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                                                    <svg
                                                      className="size-8 text-teal-500"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      strokeWidth={2}
                                                      stroke="currentColor">
                                                      <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                      />
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            )}

                                            {/* Expanded Exercise Details within Split */}
                                            {expandedExercise === exerciseIndex && (
                                              <div className="mt-2 transform overflow-hidden transition-all duration-1000 ease-in-out">
                                                <div className="w-full focus:outline-none">
                                                  {expandedExercise !== exerciseIndex && (
                                                    <div className="card max-w-screen-sm rounded-t-lg">
                                                      <div
                                                        onClick={() => toggleExercise(exerciseIndex)}
                                                        className="w-full focus:outline-none">
                                                        <div className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                                                          <svg
                                                            className="size-8 text-teal-500"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor">
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                            />
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )}
                                                  {expandedExercise === exerciseIndex && (
                                                    <div className="card max-w-screen-sm rounded-t-lg">
                                                      <div className="flex flex-row items-center justify-between">
                                                        <h6 className="mt-4 rounded-md text-lg font-bold text-teal-500">
                                                          {fullExercise.name}
                                                        </h6>
                                                      </div>
                                                      <img
                                                        src={getImage(exerciseImages, exercise.name)}
                                                        alt={exercise.name}
                                                        className=""
                                                      />
                                                      <div
                                                        onClick={() => toggleExercise(exerciseIndex)}
                                                        className="w-full focus:outline-none">
                                                        <div className="mt-2 flex cursor-pointer flex-row justify-center rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center">
                                                          <svg
                                                            className="size-8 text-teal-500"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor">
                                                            <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                                            />
                                                          </svg>
                                                        </div>
                                                      </div>
                                                      <h6 className="mt-2 font-extrabold text-teal-500">
                                                        Instructions:
                                                      </h6>
                                                      <span className="font-extrabold text-teal-500">Force: </span>
                                                      <span className="capitalize text-slate-300">
                                                        {fullExercise.force}
                                                      </span>
                                                      <br />
                                                      <span className="font-extrabold text-teal-500">Mechanic: </span>
                                                      <span className="capitalize text-slate-300">
                                                        {fullExercise.mechanic}
                                                      </span>
                                                      <br />
                                                      <span className="font-extrabold text-teal-500">Equipment: </span>
                                                      <span className="capitalize text-slate-300">
                                                        {fullExercise.equipment}
                                                      </span>
                                                      <br />
                                                      <span className="font-extrabold text-teal-500">
                                                        Primary Muscles:{' '}
                                                      </span>
                                                      <span className="capitalize text-slate-300">
                                                        {fullExercise.primaryMuscles}
                                                      </span>
                                                      <br />
                                                      {fullExercise.secondaryMuscles.length > 0 && (
                                                        <>
                                                          <span className="font-extrabold text-teal-500">
                                                            Secondary Muscles:{' '}
                                                          </span>
                                                          <span className="capitalize text-slate-300">
                                                            {fullExercise.secondaryMuscles.join(', ')}
                                                          </span>
                                                          <br />
                                                        </>
                                                      )}
                                                      <ul className="list-disc pl-5">
                                                        {fullExercise.instructions.map((instruction, instrIndex) => (
                                                          <li key={instrIndex} className="text-sm text-slate-300">
                                                            {instruction}
                                                          </li>
                                                        ))}
                                                      </ul>
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
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
      ))}
    </div>
  );
};

// PropType validation (optional but recommended)
WorkoutPlan.propTypes = {
  workouts: PropTypes.array,
};

export default WorkoutPlan;

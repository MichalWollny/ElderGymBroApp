import { useState } from 'react';
import PropTypes from 'prop-types';

const WorkoutPlan = ({ workouts }) => {
  // Ensure workouts is an array before attempting to map over it
  const validWorkouts = Array.isArray(workouts) ? workouts : [];

  // State to manage expanded/collapsed state of exercises and tips
  const [expandedExercise, setExpandedExercise] = useState(null);
  const [expandedTips, setExpandedTips] = useState(null);
  const [expandedPlans, setExpandedPlans] = useState(null);
  const [expandedSplitDays, setExpandedSplitDays] = useState(null);

  // Function to toggle expanded exercise
  const toggleExercise = (index) => {
    setExpandedExercise(expandedExercise === index ? null : index);
  };

  // Function to toggle expanded tips
  const toggleTips = (index) => {
    setExpandedTips(expandedTips === index ? null : index);
  };

  // Function to toggle expanded plans
  const togglePlans = (index) => {
    setExpandedPlans(expandedPlans === index ? null : index);
  };
  // Function to toggle expanded plans
  const toggleSplitDays = (index) => {
    setExpandedSplitDays(expandedSplitDays === index ? null : index);
  };

  return (
    // Background Container
    <div className="container mx-auto mb-8 flex min-h-svh flex-col items-center bg-gradient-to-br from-black to-blue-950 p-4">
      {/* --- */}
      {validWorkouts.map((plan, index) => (
        <div key={plan.id} className="mb-2 mt-2">
          <div className="w-90 card m-4 cursor-pointer rounded-lg border-4 border-solid border-teal-800 bg-zinc-800 p-2 shadow-md lg:card-side">

              <button className="w-full text-left focus:outline-none">
                {/* Conditional rendering for the workout image */} 
                {expandedPlans !== index && (
                  <div className="card max-w-screen-sm rounded-t-lg">
                    
                    {/* Beginner Fullbody Workout COLLAPSED starts here */}
                    <h5 className="mb-2 pb-1 rounded-t-sm border-2 border-solid border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center font-cthulhumbus text-3xl font-extrabold text-teal-500 shadow-2xl">
                      {plan.name}
                    </h5>

                    <img
                      src={`../src/assets/images/workouts/${plan.name}.jpg`}
                      alt={plan.name}
                      className="rounded-t-lg border-2 border-solid border-pink-800 shadow-lg"
                    />

                    <button onClick={() => togglePlans(index)} className="w-full focus:outline-none">
                      <div className='flex flex-row justify-center mt-2 cursor-pointer rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center'>
                        <svg className="text-teal-500 size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          {/* <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /> */}
                        </svg>
                      </div>
                    </button>
                    
                  </div>
                )}
                </button>

                {/* Beginner Fullbody Workout EXPANDED starts here */}
                {expandedPlans === index && (
                  <div>
                    <h5 className="mb-2 pb-1 rounded-t-sm border-2 border-solid border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center font-cthulhumbus text-3xl font-extrabold text-teal-500 shadow-2xl">
                      {plan.name}
                    </h5>

                    <img
                      src={`../src/assets/images/workouts/${plan.name}.jpg`}
                      alt={plan.name}
                      className="rounded-t-lg border-2 border-solid border-pink-800 shadow-lg"
                    />

                    <button onClick={() => togglePlans(index)} className="w-full focus:outline-none">
                      <div className='flex flex-row justify-center mt-2 cursor-pointer rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center'>
                        <svg className="text-teal-500 size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        {/* <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /> 
                        </svg>
                      </div>
                    </button>

                    <div className="mb-6 border-b-0 mt-2 rounded-t-lg border-0 border-pink-800 p-2">
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
                      {/* Toggle Tips section/Tips Button*/} 
                      <div className="flex justify-center">
                        <button onClick={() => toggleTips(index)} className="w-full focus:outline-none"></button>
                      </div>
                    </div>
                    {/* Render Tips content  */}
                    {expandedTips === index &&  (
                      <ul className="-mt-6 list-disc rounded-b-lg border-2 border-t-0 border-none border-pink-800 bg-zink-700 p-2 pl-6">                  
                        {plan.tips.map((tip, idx) => (
                          <li key={idx} className="text-slate-300">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* Render exercises for non-split plans and splits */}
                    {(plan.exercises || plan.splits) && (
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {/* Render exercises for non-split plans */}
                        {!plan.split &&
                          plan.exercises &&
                          plan.exercises.map((exercise, exIndex) => (
                            
                            <div
                              key={exercise.id}
                              className="mb-2 mt-2 rounded-lg border-4 border-solid border-teal-800 bg-zinc-700 p-2 pb-2 shadow-md">
                              {expandedExercise !== exIndex && (

                                <div className="">

                                  <h6 className="flex justify-center mb-2 rounded-md border-0 border-pink-800 text-xl font-bold text-teal-500">
                                    {exercise.name}
                                  </h6>

                                  <img src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                                      alt={exercise.name}
                                      className="rounded-md"/>

                                  <button onClick={() => toggleExercise(exIndex)} className="w-full focus:outline-none">
                                    <div className='flex flex-row justify-center mt-2 cursor-pointer rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center'>
                                      <svg className="text-teal-500 size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                      {/* <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />  */}
                                      </svg>
                                    </div>
                                  </button>

                                </div>
                              )}



                              {/* COLLAPSED content for exercises */}

                              {expandedExercise === exIndex && (
                                
                              <div className="">

                                <h6 className="flex justify-center mb-2 rounded-md border-0 border-pink-800 text-xl font-bold text-teal-500">
                                  {exercise.name}
                                </h6>

                                <img src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                                    alt={exercise.name}
                                    className="rounded-md"/>

                                <button onClick={() => toggleExercise(exIndex)} className="w-full focus:outline-none">
                                  <div className='flex flex-row justify-center mt-2 cursor-pointer rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center'>
                                    <svg className="text-teal-500 size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    {/* <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /> */}
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /> 
                                    </svg>
                                  </div>
                                </button>

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

                        {/* Render splits for plans with splits */}
                        {plan.split &&
                          plan.splits.map((split, splitIndex) => (
                            // Container Split A / B
                            <div
                              key={splitIndex}
                              className="mb-2 mt-2 rounded-lg border-4 border-teal-800 bg-zinc-700 p-4 shadow-md">
                              <div
                                onClick={() => toggleSplitDays(index)}
                                className="w-full cursor-pointer text-left focus:outline-none">
                                <h6 className="font-cthulhumbus text-2xl font-extrabold capitalize text-teal-500">
                                  Day {split.day}
                                </h6>
                              </div>
                              {/* Collapsible content for split days */}
                              {expandedSplitDays === index && (
                                <div>
                                  {split.muscleGroups.map((group, groupIndex) => (
                                    <div key={groupIndex} className="mb-2 mt-2">
                                      <div className="mb-2">
                                        {/* Überschrift Muskelgruppe */}
                                        <h6 className="text-xl font-semibold capitalize text-pink-600 underline">
                                          {group.group}
                                        </h6>
                                      </div>
                                      <div className="container rounded-lg border-2 border-solid border-zinc-600 p-2">
                                        {group.exercises.map((exercise, exerciseIndex) => {
                                          // Find the exercise in the plan.exercises array by ID
                                          const fullExercise = plan.exercises.find((e) => e.id === exercise.id);
                                          console.log(
                                            `../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images`,
                                          );
                                          return (
                                            <div className="mb-3 mt-3">
                                              <div key={exerciseIndex} className="text-slate-300">
                                                {expandedExercise !== exerciseIndex && (
                                                  <div className="max-w-screen-sm rounded-md border-2 border-solid border-pink-800">
                                                    <img
                                                      src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                                                      alt={exercise.name}
                                                      className="rounded-md"
                                                    />
                                                  </div>
                                                )}
                                                <div>
                                                  <div
                                                    className="cursor-pointer rounded-md border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center"
                                                    onClick={() => toggleExercise(exerciseIndex)}>
                                                    <h6 className="mt-4 rounded-md border-2 border-pink-00 text-lg font-bold text-teal-500">
                                                      {fullExercise.name}
                                                    </h6>
                                                  </div>
                                                </div>
                                                {/* Collapsible content for exercises */}
                                                {expandedExercise === exerciseIndex && (
                                                  <div className="mt-2">
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
                                                    <h6 className="mt-2 font-extrabold text-teal-500">Instructions:</h6>
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

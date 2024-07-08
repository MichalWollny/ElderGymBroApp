import { useState } from 'react';
import PropTypes from 'prop-types';

const ActiveWorkout = ({ workouts }) => {
  // Ensure workouts is an array before attempting to map over it
  // const validWorkouts = Array.isArray(workouts) ? workouts : [];

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

  console.log(workouts[0].activeWorkout.name);
  return (
    <div className="mb-4 mt-2">
      <div className="w-90 card glass m-2 mb-4 cursor-pointer rounded-lg border-4 border-solid border-[#4b0082] bg-gray-800 bg-opacity-40 p-4 pt-4 shadow-md transition-transform lg:card-side">
        <div>
          <button className="w-full text-left focus:outline-none">
            {/* <button onClick={() => togglePlans(index)} className="w-full text-left focus:outline-none"> */}
            {/* Conditional rendering for the workout image */}
            {/* {expandedPlans !== index && ( */}
            <div className="card glass max-w-screen-sm rounded-sm border-solid border-[#4b0082]">
              <img
                src={`../src/assets/images/workouts/${workouts.activeWorkout.name}.jpg`}
                alt={plan.name}
                className="rounded-md"
              />
            </div>
            {/* )} */}
            <br />
            <h5 className="card mb-2 bg-white p-2 text-center text-3xl font-extrabold text-[#2b777d]">{plan.name}</h5>
          </button>
          {/* Render Plans content */}
          {expandedPlans === index && (
            <div>
              <div className="mb-6 mt-2 rounded-md bg-white p-2">
                <span className="font-extrabold text-[#2b777d]">System: </span>
                <span className="text-gray-600">{plan.system}</span>
                <br />
                <span className="font-extrabold text-[#2b777d]">Aim: </span>
                <span className="text-gray-600">{plan.aim}</span>
                <br />
                <span className="font-extrabold text-[#2b777d]">Frequency: </span>
                <span className="text-gray-600">{plan.frequency}</span>
                <br />
                <span className="font-extrabold text-[#2b777d]">Workout Duration: </span>
                <span className="text-gray-600">{plan.planDuration}</span>
                <br />
                <span className="font-extrabold text-[#2b777d]">Rest Duration: </span>{' '}
                <span className="text-gray-600">{plan.breakDuration}</span>
                {plan.split ? (
                  <>
                    <br />
                    <span className="font-extrabold text-[#2b777d]">Split: </span>
                    <span className="text-gray-600">Yes</span>
                    <br />
                  </>
                ) : (
                  ''
                )}
                {/* Toggle Tips section */}
                <button onClick={() => toggleTips(index)} className="w-full text-left focus:outline-none">
                  <h6 className="text-md cursor-pointer font-extrabold text-[#2b777d]">Tips</h6>
                </button>
              </div>
              {/* Render Tips content */}
              {expandedTips === index && (
                <ul className="mb-4 mt-2 list-disc rounded-md bg-white p-2 pl-6">
                  {plan.tips.map((tip, idx) => (
                    <li key={idx} className="text-gray-600">
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
              {/* Render exercises for non-split plans and splits */}
              {(plan.exercises || plan.splits) && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Render exercises for non-split plans */}
                  {!plan.split &&
                    plan.exercises &&
                    plan.exercises.map((exercise, exIndex) => (
                      <div key={exercise.id} className="mb-2 mt-2 rounded-lg border bg-white p-4 shadow-md">
                        {expandedExercise !== exIndex && (
                          <div className="card glass max-w-screen-sm rounded-md border-solid border-white">
                            <img
                              src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                              alt={exercise.name}
                              className="rounded-md"
                            />
                          </div>
                        )}
                        <div className="cursor-pointer" onClick={() => toggleExercise(exIndex)}>
                          <h6 className="mt-2 text-lg font-bold text-[#2b777d]">{exercise.name}</h6>
                        </div>
                        {/* Collapsible content for exercises */}
                        {expandedExercise === exIndex && (
                          <div className="mt-2">
                            <span className="font-extrabold text-[#2b777d]">Force: </span>
                            <span className="capitalize text-gray-600">{exercise.force}</span>
                            <br />
                            <span className="font-extrabold text-[#2b777d]">Mechanic: </span>
                            <span className="capitalize text-gray-600">{exercise.mechanic}</span>
                            <br />
                            <span className="font-extrabold text-[#2b777d]">Equipment: </span>
                            <span className="capitalize text-gray-600">{exercise.equipment}</span>
                            <br />
                            <span className="font-extrabold text-[#2b777d]">Primary Muscles: </span>
                            <span className="capitalize text-gray-600">{exercise.primaryMuscles}</span>
                            <br />
                            {exercise.secondaryMuscles.length > 0 && (
                              <>
                                <span className="font-extrabold text-[#2b777d]">Secondary Muscles: </span>
                                <span className="capitalize text-gray-600">{exercise.secondaryMuscles.join(', ')}</span>
                                <br />
                              </>
                            )}
                            <h6 className="mt-2 font-extrabold text-[#2b777d]">Instructions:</h6>
                            <ul className="list-disc pl-5">
                              {exercise.instructions.map((instruction, instrIndex) => (
                                <li key={instrIndex} className="text-sm text-gray-600">
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
                      <div key={splitIndex} className="mb-2 mt-2 rounded-lg border bg-white p-4 shadow-md">
                        <div
                          onClick={() => toggleSplitDays(index)}
                          className="w-full cursor-pointer text-left focus:outline-none">
                          <h6 className="text-2xl font-semibold capitalize text-[#2b777d]">Day {split.day}</h6>
                        </div>
                        {/* Collapsible content for split days */}
                        {expandedSplitDays === index && (
                          <div>
                            {split.muscleGroups.map((group, groupIndex) => (
                              <div key={groupIndex} className="mb-2 mt-2">
                                <div className="mb-2">
                                  <h6 className="text-xl font-semibold capitalize text-[#2b777d]">{group.group}</h6>
                                </div>

                                {group.exercises.map((exercise, exerciseIndex) => {
                                  // Find the exercise in the plan.exercises array by ID
                                  const fullExercise = plan.exercises.find((e) => e.id === exercise.id);
                                  console.log(
                                    `../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images`,
                                  );
                                  return (
                                    <div className="mb-3 mt-3">
                                      <div key={exerciseIndex} className="text-gray-600">
                                        {expandedExercise !== exerciseIndex && (
                                          <div className="card glass max-w-screen-sm rounded-md border-solid border-white">
                                            <img
                                              src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                                              alt={exercise.name}
                                              className="rounded-md"
                                            />
                                          </div>
                                        )}
                                        <div>
                                          <div className="cursor-pointer" onClick={() => toggleExercise(exerciseIndex)}>
                                            <h6 className="text-lg font-bold text-[#2b777d]">{fullExercise.name}</h6>
                                          </div>
                                        </div>
                                        {/* Collapsible content for exercises */}
                                        {expandedExercise === exerciseIndex && (
                                          <div className="mt-2">
                                            <span className="font-extrabold text-[#2b777d]">Force: </span>
                                            <span className="capitalize text-gray-600">{fullExercise.force}</span>
                                            <br />
                                            <span className="font-extrabold text-[#2b777d]">Mechanic: </span>
                                            <span className="capitalize text-gray-600">{fullExercise.mechanic}</span>
                                            <br />
                                            <span className="font-extrabold text-[#2b777d]">Equipment: </span>
                                            <span className="capitalize text-gray-600">{fullExercise.equipment}</span>
                                            <br />
                                            <span className="font-extrabold text-[#2b777d]">Primary Muscles: </span>
                                            <span className="capitalize text-gray-600">
                                              {fullExercise.primaryMuscles}
                                            </span>
                                            <br />
                                            {fullExercise.secondaryMuscles.length > 0 && (
                                              <>
                                                <span className="font-extrabold text-[#2b777d]">
                                                  Secondary Muscles:{' '}
                                                </span>
                                                <span className="capitalize text-gray-600">
                                                  {fullExercise.secondaryMuscles.join(', ')}
                                                </span>
                                                <br />
                                              </>
                                            )}
                                            <h6 className="mt-2 font-extrabold text-[#2b777d]">Instructions:</h6>
                                            <ul className="list-disc pl-5">
                                              {fullExercise.instructions.map((instruction, instrIndex) => (
                                                <li key={instrIndex} className="text-sm text-gray-600">
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
    </div>
  );
};

// PropType validation (optional but recommended)
ActiveWorkout.propTypes = {
  workouts: PropTypes.object,
};

export default ActiveWorkout;

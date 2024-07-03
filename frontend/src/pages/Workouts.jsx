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
    <div className="container mx-auto p-4">
      {validWorkouts.map((plan, index) => (
        <div key={plan.id} className="mb-8">
          <div className="card glass m-2 mb-4 w-80 cursor-pointer rounded-lg border bg-gray-800 p-4 shadow-md transition-transform lg:card-side">
            <div>
              <button onClick={() => togglePlans(index)} className="w-full text-left focus:outline-none">
                {/* Conditional rendering for the workout image */}
                {expandedPlans !== index && (
                  <div className="card glass max-w-screen-sm rounded-md border-solid border-white">
                    <img
                      src={`../src/assets/images/workouts/${plan.name}.jpg`}
                      alt={plan.name}
                      className="rounded-md"
                    />
                  </div>
                )}
                <br />
                <h5 className="card mb-2 bg-white text-center text-2xl font-extrabold text-[#2b777d]">{plan.name}</h5>
              </button>
              {/* Render Plans content */}
              {expandedPlans === index && (
                <div>
                  <div className="mb-6 mt-2 rounded-md bg-white p-2">
                    <span className="text-gray-600">System: </span> <span className="text-gray-600">{plan.system}</span>
                    <p className="text-gray-600">Frequency: {plan.frequency}</p>
                    <p className="text-gray-600">Split: {plan.split ? 'Yes' : 'No'}</p>
                    {/* Toggle Tips section */}
                    <button onClick={() => toggleTips(index)} className="w-full text-left focus:outline-none">
                      <h6 className="text-md cursor-pointer font-semibold text-[#2b777d]">Tips</h6>
                    </button>
                  </div>
                  {/* Render Tips content */}
                  {expandedTips === index && (
                    <ul className="mb-4 mt-2 list-disc rounded-md bg-white p-2 pl-5">
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
                            <div className="cursor-pointer" onClick={() => toggleExercise(exIndex)}>
                              <h6 className="text-md font-bold text-[#2b777d]">{exercise.name}</h6>
                            </div>

                            {/* Collapsible content for exercises */}
                            {expandedExercise === exIndex && (
                              <div className="mt-2">
                                <p className="text-gray-600">Force: {exercise.force}</p>
                                <p className="text-gray-600">Mechanic: {exercise.mechanic}</p>
                                <p className="text-gray-600">Equipment: {exercise.equipment}</p>
                                <p className="text-gray-600">Primary Muscles: {exercise.primaryMuscles.join(', ')}</p>
                                <p className="text-gray-600">
                                  Secondary Muscles: {exercise.secondaryMuscles.join(', ')}
                                </p>
                                <h6 className="text-md mt-2 font-bold">Instructions:</h6>
                                <ul className="list-disc pl-5">
                                  {exercise.instructions.map((instruction, instrIndex) => (
                                    <li key={instrIndex} className="text-gray-600">
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
                          <div key={splitIndex} className="mb-4 rounded-lg border bg-white p-4 shadow-md">
                            <div
                              onClick={() => toggleSplitDays(index)}
                              className="w-full cursor-pointer text-left focus:outline-none">
                              <h6 className="text-md font-bold text-[#2b777d]">Day {split.day}</h6>
                            </div>
                            {/* Collapsible content for split days */}
                            {expandedSplitDays === index && (
                              <div>
                                {split.muscleGroups.map((group, groupIndex) => (
                                  <div key={groupIndex} className="mt-2">
                                    <div>
                                      <h6 className="text-sm font-semibold capitalize text-[#2b777d]">{group.group}</h6>
                                    </div>

                                    <ul className="list-disc pl-5">
                                      {group.exercises.map((exercise, exerciseIndex) => {
                                        // Find the exercise in the plan.exercises array by ID
                                        const fullExercise = plan.exercises.find((e) => e.id === exercise.id);
                                        return (
                                          <li key={exerciseIndex} className="text-gray-600">
                                            <div>
                                              <div
                                                className="cursor-pointer"
                                                onClick={() => toggleExercise(exerciseIndex)}>
                                                {fullExercise.name}
                                              </div>
                                            </div>
                                            {/* Collapsible content for exercises */}
                                            {expandedExercise === exerciseIndex && (
                                              <div>
                                                <div>Force: {fullExercise.force}</div>
                                                <div>Level: {fullExercise.level}</div>
                                                <div>Mechanics: {fullExercise.mechanics}</div>
                                                {/* Add more details as needed */}
                                              </div>
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
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
      ))}
    </div>
  );
};

// PropType validation (optional but recommended)
WorkoutPlan.propTypes = {
  workouts: PropTypes.array,
};

export default WorkoutPlan;

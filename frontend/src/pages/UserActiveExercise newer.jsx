import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserActiveExercise = ({ exercise, activeWorkout }) => {
  const [amountOfSets, setAmountOfSets] = useState(exercise.sets || 0);
  const [amountOfReps, setAmountOfReps] = useState(exercise.reps || '');

  // Update state when the exercise prop changes
  useEffect(() => {
    setAmountOfSets(exercise.sets || 0);
    setAmountOfReps(exercise.reps || '');
  }, [exercise]);

  const exerciseSets = (amountOfSets) =>
    Array.from({ length: amountOfSets }, (_, i) => (
      <div key={i} className="m-2 border-2 border-solid border-black p-2">
        <p className="pb-2 underline">
          Set <span>{i + 1}</span>
        </p>
        <label>Weight</label>
        <input
          type="number"
          placeholder="Input Weight"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />

        <label>Reps</label>
        <input
          type="number"
          placeholder={amountOfReps}
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    ));

  const pushExerciseSetsRepsWeight = async (
    exercise,
    set1reps,
    set2reps,
    set3reps,
    set1weight,
    set2weight,
    set3weight,
  ) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/me/workouttracking/addExerciseProgress/${activeWorkout.id}/${exercise.id}}`,
        {
          exerciseId: `${exercise.id}`,
          exerciseName: `${exercise.name}`,
          sets: [
            { reps: `${set1reps}`, weight: `${set1weight}` },
            { reps: `${set2reps}`, weight: `${set2weight}` },
            { reps: `${set3reps}`, weight: `${set3weight}` },
          ],
        },
        {
          withCredentials: true,
        },
      );

      // Navigate to X after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div key={exercise.id} className="m-4 border-4 border-solid border-black bg-white p-4 font-cthulhumbus text-black">
      <h2>{exercise.name}</h2>
      <img
        src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
        alt={exercise.name}
        className="h-auto w-20 rounded-md"
      />
      {exerciseSets(amountOfSets)}
      <form action="submit" onSubmit={{ pushExerciseSetsRepsWeight }}>
        <button
          type="submit"
          className="rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-600 to-zinc-900 text-center">
          Complete Exercise
        </button>
      </form>
    </div>
  );
};

export default UserActiveExercise;

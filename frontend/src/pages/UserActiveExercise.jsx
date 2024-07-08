import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserActiveExercise = ({ exercise, activeWorkout }) => {
  const [setsData, setSetsData] = useState([]);

  useEffect(() => {
    // Initialize setsData based on the amount of sets for the exercise
    const initialSetsData = Array.from({ length: exercise.sets || 0 }, () => ({ reps: '', weight: '' }));
    setSetsData(initialSetsData);
  }, [exercise]);

  const handleSetChange = (index, field, value) => {
    const updatedSets = setsData.map((set, i) => (i === index ? { ...set, [field]: value } : set));
    setSetsData(updatedSets);
  };
  // console.log(setsData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/me/workouttracking/addExerciseProgress/${activeWorkout.id}/${exercise.id}`,
        {
          exerciseId: exercise.id,
          exerciseName: exercise.name,
          sets: setsData,
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
      <form onSubmit={handleSubmit}>
        {setsData.map((set, index) => (
          <div key={index} className="m-2 border-2 border-solid border-black p-2">
            <p className="pb-2 underline">
              Set <span>{index + 1}</span>
            </p>
            <label>Weight (kg)</label>
            <input
              type="number"
              value={set.weight}
              onChange={(e) => handleSetChange(index, 'weight', e.target.value)}
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

            <label>Reps</label>
            <input
              type="number"
              value={set.reps}
              onChange={(e) => handleSetChange(index, 'reps', e.target.value)}
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        ))}

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

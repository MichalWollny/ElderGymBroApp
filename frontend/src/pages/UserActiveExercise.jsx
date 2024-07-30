import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import skippingImage from '../assets/images/skipping.png';
import CountdownTimer from '../assets/components/CountdownTimer';

const UserActiveExercise = ({
  exercise,
  activeWorkout,
  onComplete,
  onCompleteWithoutKarma,
  isCompleted,
  setCompletedExercises,
  completedExercises,
  selectedIndex,
  sliderRef,
  handleExerciseClick,
  setShowModal,
}) => {
  const [setsData, setSetsData] = useState([]);
  const [showSkipModal, setShowSkipModal] = useState(false); // Track skip modal visibility

  useEffect(() => {
    // Initialize setsData based on the amount of sets for the exercise
    const initialSetsData = Array.from({ length: exercise.sets || 0 }, () => ({ reps: '', weight: '' }));
    setSetsData(initialSetsData);
  }, [exercise]);

  const handleSetChange = (index, field, value) => {
    const updatedSets = setsData.map((set, i) => (i === index ? { ...set, [field]: value } : set));
    setSetsData(updatedSets);
  };

  const validateForm = (sets) => {
    return sets.every((set) => !isNaN(set.reps) && set.reps !== '' && !isNaN(set.weight) && set.weight !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allEmpty = setsData.every((set) => set.reps === '' && set.weight === '');
    const isValid = validateForm(setsData);

    if (allEmpty) {
      toast.error('Complete the Sets first');
      return;
    }

    if (!isValid) {
      toast.error('Please enter valid numbers for all fields.');
      return;
    }

    // Call the onComplete function with exercise data to handle submission and karma points
    await onComplete({
      id: exercise.id,
      name: exercise.name,
      setsData: setsData,
    });
  };

  const handleSkipExercise = () => {
    // Mark the current exercise as completed
    setCompletedExercises([...completedExercises, selectedIndex]);
    // Close the skip modal
    setShowSkipModal(false);
    // Move to the next exercise directly without awarding karma
    onCompleteWithoutKarma();
  };

  const handleInputKeyDown = (e) => {
    if (
      !/[0-9]/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'ArrowLeft' &&
      e.key !== 'ArrowRight' &&
      e.key !== 'Tab' &&
      e.key !== 'Delete' &&
      e.key !== 'Enter'
    ) {
      e.preventDefault();
    }
  };

  return (
    <div
      key={exercise.id}
      className={`m-4 border-4 border-solid ${isCompleted ? 'border-gray-500 bg-gray-300' : 'border-teal-800 bg-zinc-800'} rounded-lg p-4 font-cthulhumbus text-white shadow-md`}>
      <h2 className={`${isCompleted ? 'text-gray-500' : 'text-teal-500'} pb-2 pl-2 pt-2 text-center text-lg`}>
        {exercise.name}
      </h2>
      {/* <img
        src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
        alt={exercise.name}
        className={`h-auto w-20 rounded-md ${isCompleted ? 'grayscale' : ''} pl-3`}
      /> */}
      <form onSubmit={handleSubmit}>
        {setsData.map((set, index) => (
          <div
            key={index}
            className={`m-2 border-2 border-solid ${isCompleted ? 'border-gray-500 bg-gray-400' : 'border-teal-800 bg-zinc-700'} rounded-md p-2`}>
            <p className={`${isCompleted ? 'text-gray-500' : ''} pb-2`}>
              Set <span>{index + 1}</span>
            </p>
            <label className={`${isCompleted ? 'text-gray-500' : ''}`}>Weight (kg)</label>
            <input
              type="text"
              value={set.weight}
              onChange={(e) => handleSetChange(index, 'weight', e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              disabled={isCompleted}
            />

            <label className={`${isCompleted ? 'text-gray-500' : ''}`}>Reps</label>
            <input
              type="text"
              value={set.reps}
              onChange={(e) => handleSetChange(index, 'reps', e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              disabled={isCompleted}
            />
            <div className="w-full max-w-xs">
              <CountdownTimer />
            </div>
          </div>
        ))}

        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="rounded-md border-2 border-yellow-800 bg-gradient-to-tr from-gray-900 via-yellow-600 to-zinc-900 px-4 py-2 text-white"
            onClick={() => setShowSkipModal(true)}>
            Skip
          </button>
          <button
            type="submit"
            className="rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-600 to-zinc-900 px-4 py-2 text-white"
            disabled={isCompleted}>
            Complete Exercise
          </button>
        </div>
      </form>
      {showSkipModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-center text-2xl font-bold text-red-500">Are you sure to skip this workout?</h2>
            <img src={skippingImage} alt="Skipping" className="mx-auto my-4 h-32 w-32" />
            <div className="flex justify-center space-x-4">
              <button className="rounded-md bg-red-500 px-4 py-2 text-white" onClick={() => setShowSkipModal(false)}>
                No, continue
              </button>
              <button className="rounded-md bg-green-500 px-4 py-2 text-white" onClick={handleSkipExercise}>
                Yes, skip this one
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserActiveExercise;

import { useAuth } from '../context/AuthProvider';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import UserActiveExercise from './UserActiveExercise';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import Confetti from 'react-confetti';
import doneImage from '../assets/images/finished.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'daisyui/dist/full.css';

const UserWorkout = () => {
  const { userData, checkUser } = useAuth();
  const [activeWorkout, setActiveWorkout] = useState({ exercises: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeExercise, setActiveExercise] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected index
  const [completedExercises, setCompletedExercises] = useState([]); // Track completed exercises
  const [showModal, setShowModal] = useState(false); // Track modal visibility
  const [karmaPoints, setKarmaPoints] = useState(0); // Track karma points
  const sliderRef = useRef(null); // Reference to the slider
  const navigate = useNavigate(); // Use navigate for routing

  useEffect(() => {
    if (!userData || !userData.username) {
      checkUser(); // Fetch user data if not already available
    }
  }, [userData, checkUser]);

  useEffect(() => {
    const getActiveWorkout = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/me/workouttracking/getActiveWorkout`, {
          withCredentials: true,
        });
        setActiveWorkout(response.data.activeWorkout);
        setIsLoading(false);
        // Set the initial selected exercise
        if (response.data.activeWorkout.exercises.length > 0) {
          setSelectedIndex(0);
          setActiveExercise(response.data.activeWorkout.exercises[0]);
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };

    if (userData && userData.username) {
      getActiveWorkout();
    }
  }, [userData]);

  const handleExerciseClick = (exercise, index) => {
    setActiveExercise(exercise);
    setSelectedIndex(index); // Set selected index
  };

  const handleAfterChange = (current) => {
    handleExerciseClick(activeWorkout.exercises[current], current);
  };

  const handleCompleteExercise = () => {
    if (selectedIndex < activeWorkout.exercises.length - 1) {
      const nextIndex = selectedIndex + 1;
      sliderRef.current.slickGoTo(nextIndex); // Move to the next slide
      handleExerciseClick(activeWorkout.exercises[nextIndex], nextIndex); // Select the next exercise
    }
    // Mark the current exercise as completed
    setCompletedExercises([...completedExercises, selectedIndex]);
    // Check if all exercises are completed
    if (completedExercises.length + 1 === activeWorkout.exercises.length) {
      setShowModal(true); // Show the modal if all exercises are completed
    }
  };

  const completeExerciseWithKarma = async (exercise) => {
    try {
      // Complete exercise
      await axios.post(
        `${import.meta.env.VITE_API_URL}/me/workouttracking/addExerciseProgress/${activeWorkout.id}/${exercise.id}`,
        {
          exerciseId: exercise.id,
          exerciseName: exercise.name,
          sets: exercise.setsData,
        },
        {
          withCredentials: true,
        },
      );

      // Award karma points
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/profile/me/karma`,
        { awards: { karmaPoints: { $inc: 10 } } },
        { withCredentials: true },
      );

      // Update local karma points state
      setKarmaPoints(karmaPoints + 10);

      // Show toast notification
      toast.success('✨ 10 dark blessings received!', { autoClose: 2000 });

      handleCompleteExercise(); // Move to the next exercise and handle completion logic
    } catch (error) {
      console.error(error);
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false, // Make the slider non-infinite
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%', // Increase padding to show parts of adjacent images
    arrows: false, // Hide the default arrows
    accessibility: true, // Enable keyboard navigation
    focusOnSelect: true, // Focus on select to enable keyboard interaction
    afterChange: handleAfterChange, // Add afterChange handler
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: true,
          centerPadding: '20%', // Increase padding to show parts of adjacent images
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20%', // Increase padding to show parts of adjacent images
        },
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-black to-blue-950 pt-0 font-cthulhumbus">
      <div className="fixed left-0 right-0 top-0 z-50 bg-black p-0 text-center text-white shadow-md">
        <div className="flex items-center justify-center">
          <span className="mr-2">Karma</span>
          <progress className="progress progress-accent w-56" value={karmaPoints} max="100"></progress>
          <span className="ml-2">+ {karmaPoints} pts</span>
        </div>
      </div>
      <div className="mt-6 w-full max-w-screen-sm">
        {' '}
        {/* Adjust margin to make space for the progress bar */}
        <h2 className="px-4 py-2 text-center font-cthulhumbus text-xl text-white">Exercise List</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="pb-6">
            {' '}
            {/* Add padding to the bottom of the slider */}
            <Slider {...settings} className="max-w-full" ref={sliderRef}>
              {activeWorkout.exercises.map((exercise, index) => (
                <div
                  key={exercise.id || index}
                  id={`item-${index}`}
                  className={`carousel-item flex flex-col items-center px-2 ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => handleExerciseClick(exercise, index)}>
                  <img
                    src={`../src/assets/images/Exercises/${exercise.name.replace(/ /g, '_')}/images/0.jpg`}
                    alt={exercise.name}
                    className={`h-auto w-full max-w-xs rounded-md ${completedExercises.includes(index) ? 'grayscale' : ''}`}
                  />
                  <p className="mt-2 text-center text-xs text-white">{exercise.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <div>
        {activeExercise ? (
          <UserActiveExercise
            exercise={activeExercise}
            activeWorkout={activeWorkout}
            onComplete={completeExerciseWithKarma}
            onCompleteWithoutKarma={handleCompleteExercise} // New prop for skipping without karma
            isCompleted={completedExercises.includes(selectedIndex)}
            setCompletedExercises={setCompletedExercises}
            completedExercises={completedExercises}
            selectedIndex={selectedIndex}
            sliderRef={sliderRef} // Pass sliderRef
            handleExerciseClick={handleExerciseClick} // Pass handleExerciseClick
            setShowModal={setShowModal} // Pass setShowModal
          />
        ) : (
          <p className="text-center text-white">Choose an Exercise</p>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={1000}
            recycle={false}
            className="absolute inset-0" // Confetti within the modal
          />
          <div className="relative z-10 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-center text-2xl font-bold text-green-500">Well done!</h2>
            <p className="mt-4 text-center text-green-500">You have completed all exercises.</p>
            <p className="pb-4 text-center text-green-500">Total Karma Points Collected: {karmaPoints}</p>
            <img src={doneImage} alt="Well done" className="mx-auto mb-4 h-32 w-32" />
            <button className="mt-6 w-full rounded-md bg-green-500 py-2 text-white" onClick={() => navigate('/home')}>
              Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserWorkout;

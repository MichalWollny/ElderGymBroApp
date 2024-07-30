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

// Pre-import all images
import barbellBenchPressMediumGripImage from '../assets/images/Exercises/Barbell_Bench_Press_-_Medium_Grip/images/0.jpg';
import barbellSquatImage from '../assets/images/Exercises/Barbell_Squat/images/0.jpg';
import bentOverBarbellRowImage from '../assets/images/Exercises/Bent_Over_Barbell_Row/images/0.jpg';
import bentOverTwoDumbbellRowImage from '../assets/images/Exercises/Bent_Over_Two_Dumbbell_Row/images/0.jpg';
import butterflyImage from '../assets/images/Exercises/Butterfly/images/0.jpg';
import closeGripEZBarCurlImage from '../assets/images/Exercises/Close_Grip_EZ_Bar_Curl/images/0.jpg';
import closeGripEZBarPressImage from '../assets/images/Exercises/Close_Grip_EZ_Bar_Press/images/0.jpg';
import crunchesImage from '../assets/images/Exercises/Crunches/images/0.jpg';
import dumbbellBicepCurlImage from '../assets/images/Exercises/Dumbbell_Bicep_Curl/images/0.jpg';
import flatBenchLyingLegRaiseImage from '../assets/images/Exercises/Flat_Bench_Lying_Leg_Raise/images/0.jpg';
import hyperextensionsImage from '../assets/images/Exercises/Hyperextensions_(Back_Extensions)/images/0.jpg';
import legExtensionsImage from '../assets/images/Exercises/Leg_Extensions/images/0.jpg';
import legPressImage from '../assets/images/Exercises/Leg_Press/images/0.jpg';
import lowCableTricepsExtensionImage from '../assets/images/Exercises/Low_Cable_Triceps_Extension/images/0.jpg';
import lyingLegCurlsImage from '../assets/images/Exercises/Lying_Leg_Curls/images/0.jpg';
import preacherCurlImage from '../assets/images/Exercises/Preacher_Curl/images/0.jpg';
import romanianDeadliftImage from '../assets/images/Exercises/Romanian_Deadlift/images/0.jpg';
import seatedCableRowsImage from '../assets/images/Exercises/Seated_Cable_Rows/images/0.jpg';
import seatedDumbbellPressImage from '../assets/images/Exercises/Seated_Dumbbell_Press/images/0.jpg';
import seatedDumbbellShoulderPressImage from '../assets/images/Exercises/Seated_Dumbbell_Shoulder_Press/images/0.jpg';
import sideLateralRaiseImage from '../assets/images/Exercises/Side_Lateral_Raise/images/0.jpg';
import smithMachineInclineBenchPressImage from '../assets/images/Exercises/Smith_Machine_Incline_Bench_Press/images/0.jpg';
import smithMachineOverheadShoulderPressImage from '../assets/images/Exercises/Smith_Machine_Overhead_Shoulder_Press/images/0.jpg';
import standingBicepsCableCurlImage from '../assets/images/Exercises/Standing_Biceps_Cable_Curl/images/0.jpg';
import standingCalfRaisesImage from '../assets/images/Exercises/Standing_Calf_Raises/images/0.jpg';
import tricepDipsImage from '../assets/images/Exercises/Tricep_Dips/images/0.jpg';
import tricepsPushdownImage from '../assets/images/Exercises/Triceps_Pushdown/images/0.jpg';
import wideGripLatPulldownImage from '../assets/images/Exercises/Wide-Grip_Lat_Pulldown/images/0.jpg';

const imageMap = {
  'Barbell Bench Press - Medium Grip': barbellBenchPressMediumGripImage,
  'Barbell Squat': barbellSquatImage,
  'Bent Over Barbell Row': bentOverBarbellRowImage,
  'Bent Over Two Dumbbell Row': bentOverTwoDumbbellRowImage,
  Butterfly: butterflyImage,
  'Close Grip EZ Bar Curl': closeGripEZBarCurlImage,
  'Close Grip EZ Bar Press': closeGripEZBarPressImage,
  Crunches: crunchesImage,
  'Dumbbell Bicep Curl': dumbbellBicepCurlImage,
  'Flat Bench Lying Leg Raise': flatBenchLyingLegRaiseImage,
  'Hyperextensions (Back Extensions)': hyperextensionsImage,
  'Leg Extensions': legExtensionsImage,
  'Leg Press': legPressImage,
  'Low Cable Triceps Extension': lowCableTricepsExtensionImage,
  'Lying Leg Curls': lyingLegCurlsImage,
  'Preacher Curl': preacherCurlImage,
  'Romanian Deadlift': romanianDeadliftImage,
  'Seated Cable Rows': seatedCableRowsImage,
  'Seated Dumbbell Press': seatedDumbbellPressImage,
  'Seated Dumbbell Shoulder Press': seatedDumbbellShoulderPressImage,
  'Side Lateral Raise': sideLateralRaiseImage,
  'Smith Machine Incline Bench Press': smithMachineInclineBenchPressImage,
  'Smith Machine Overhead Shoulder Press': smithMachineOverheadShoulderPressImage,
  'Standing Biceps Cable Curl': standingBicepsCableCurlImage,
  'Standing Curl Raises': standingCalfRaisesImage,
  'Tricep Dips': tricepDipsImage,
  'Triceps Pushdown': tricepsPushdownImage,
  'Wide-Grip Lat Pulldown': wideGripLatPulldownImage,
};

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
    centerPadding: '20%',
    arrows: false,
    accessibility: true,
    focusOnSelect: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          centerMode: true,
          centerPadding: '20%',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20%',
        },
      },
    ],
  };

  const importImage = (exerciseName) => {
    return imageMap[exerciseName] || null;
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
        <h2 className="px-4 py-2 text-center font-cthulhumbus text-xl text-white">Exercise List</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="pb-6">
            <Slider {...settings} className="max-w-full" ref={sliderRef}>
              {activeWorkout.exercises.map((exercise, index) => (
                <div
                  key={exercise.id || index}
                  id={`item-${index}`}
                  className={`carousel-item flex flex-col items-center px-2 ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => handleExerciseClick(exercise, index)}>
                  <img
                    src={importImage(exercise.name)}
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
            onCompleteWithoutKarma={handleCompleteExercise}
            isCompleted={completedExercises.includes(selectedIndex)}
            setCompletedExercises={setCompletedExercises}
            completedExercises={completedExercises}
            selectedIndex={selectedIndex}
            sliderRef={sliderRef}
            handleExerciseClick={handleExerciseClick}
            setShowModal={setShowModal}
          />
        ) : (
          <p className="text-center text-white">Choose an Exercise</p>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={1000}
            recycle={false}
            className="absolute inset-0"
          />
          <div className="relative z-10 w-full max-w-sm rounded-lg bg-gray-900 p-6 text-white shadow-lg">
            <h2 className="text-center text-2xl font-bold text-teal-400">Well done!</h2>
            <p className="mt-4 text-center text-teal-400">You have completed all exercises.</p>
            <p className="pb-4 text-center text-teal-400">Total Karma Points Collected: {karmaPoints}</p>
            <img src={doneImage} alt="Well done" className="mx-auto mb-4 h-32 w-32" />
            <button className="mt-6 w-full rounded-md bg-teal-700 py-2 text-white" onClick={() => navigate('/home')}>
              Completed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserWorkout;

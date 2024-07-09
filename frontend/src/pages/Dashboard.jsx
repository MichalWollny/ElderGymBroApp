import { useEffect, useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import gymLordImage from '../assets/images/gymLord.png';


import Cookies from 'js-cookie';

import Button from '@mui/material/Button';

const cards = [
  {
    image: gymLordImage,
    heading: 'Active workout heading endpoint',
    subheading: 'Active workout subheading endpoint',
  },
];

const Dashboard = () => {
  const { userData, checkUser } = useAuth();
  const [expandedElement, setExpandedElements] = useState(null);
  const navigate = useNavigate();
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userData || !userData.username) {
      checkUser(); // Fetch user data if not already available
    }
  }, [userData, checkUser]);

  const toggleElement = () => {
    setExpandedElements(!expandedElement);
  };

  useEffect(() => {
    const getActiveWorkout = async () => {
      setIsLoading(true);
      const apiUrl = `${import.meta.env.VITE_API_URL}/me/workouttracking/getActiveWorkout`;
      console.log('Request URL:', apiUrl); // Log the URL
      try {
        const response = await axios.get(apiUrl, {
          withCredentials: true,
        });
        console.log('Response data:', response.data);
        setActiveWorkout(response.data.activeWorkout);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching active workout:', error);
        setIsLoading(false);
      }
    };
    getActiveWorkout();
  }, []);

  const activateWorkout = async (activeWorkout) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/me/workouttracking/addWorkoutProgress`,
        {
          workoutId: `${activeWorkout.id}`,
          progress: [],
        },
        {
          withCredentials: true,
        },
      );

      // Navigate to /userworkout after successful tracking update
      navigate('/userworkout');
    } catch (error) {
      console.error(error);
    }
  };

  if (!userData || !userData.username) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="container mx-auto mb-8 flex min-h-svh flex-col bg-gradient-to-br from-black to-blue-950 p-4">

        <div className="mt-16 flex flex-col justify-center">
          <h1 className="mb-4 cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
            Home
          </h1>

          {/* <button
            className="px-2 mx-auto rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center"
            onClick={() => activateWorkout(activeWorkout)}>
            Start Workout
          </button> */}
          
            <Button
              type="button"
              variant="contained"
              onClick={() => activateWorkout(activeWorkout)}
              sx={{ mt: 3, mb: 2, backgroundColor: '#333', color: 'white' }}>
              Start Workout
            </Button>

          </div>

          <div className="flex flex-col ">
            <h2 className="px-4 font-cthulhumbus">Active workout</h2>
          </div>

          </div>

  );
};

export default Dashboard;

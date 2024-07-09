import { useEffect, useState } from 'react';
import UICardLarge from '../assets/components/UICardLarge';
import { useAuth } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import gymLordImage from '../assets/images/gymLord.png';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import React from "react";
import UICard from '../assets/components/UICard';

const activeworkout = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/images/workouts/Beginner_Fullbody_Workout.jpg',
    heading: 'Beginner Fullbody Workout',
    subheading: 'A lone tribute to the muscle deity',
    // other props...
  }
];

const cards = [
  {
    // Maximize Your Strength Card
    image: '/src/assets/icons/svg/number1.svg',
    heading: 'News Headline 1',
    subheading: 'News Subheadline1',
    // other props...
  },
  {
    // Built Up Your Stamina Card
    image: '/src/assets/icons/svg/number2.svg',
    heading: 'News Headline 2',
    subheading: 'News Subheadline2',
    // other props...
  },
  {
    // Grow Your Muscles Card
    image: '/src/assets/icons/svg/number3.svg',
    heading: 'News Headline 3',
    subheading: 'News Subheadline3',
    // other props...
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
    if (!userData ||!userData.username) {
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

  if (!userData ||!userData.username) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  // UICard large settings
  var settingslarge = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

   // UICard small settings
  var settingssmall = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
  };



  return (
    <div className="container mx-auto mb-8 flex min-h-svh flex-col bg-gradient-to-br from-black to-blue-950 p-4">
      <div className="mt-16 flex flex-col justify-center">
        <h1 className="mb-4 cursor-default bg-gradient-to-br from-white to-gray-400 bg-clip-text pt-2 text-center font-cthulhumbus font-medium leading-tight text-transparent sm:text-3xl md:text-4xl">
          Home
        </h1>

        <div className="flex flex-col ">
          <h2 className="px-4 font-cthulhumbus text-base">Active workout</h2>
        </div>

      <div className="flex flex-row">
        <div className="flex flex-row">
          {activeworkout.map((activeworkout, index) => (
            <div key={index}>
                <UICardLarge image={activeworkout.image} heading={activeworkout.heading} subheading={activeworkout.subheading}/>
            </div>
          ))}
        </div>
        <button
          className="mt-4 px-2  rounded-md border-2 border-pink-800 bg-gradient-to-tr from-gray-900 via-pink-900 to-zinc-900 text-center"
          onClick={() => activateWorkout(activeWorkout)}>
          Start Workout
        </button>
        {/* <Button
          type="button"
          variant="contained"
          onClick={() => activateWorkout(activeWorkout)}
          sx={{ mt: 3, mb: 2, backgroundColor: '#333', color: 'white', my: 'auto' }}>
          Start Workout
        </Button> */}
      </div> 





        <h2 className="px-4 font-cthulhumbus text-base">Cult News</h2>
        <br/>

        <div className="flex flex-col ">
          <h2 className="px-4 font-cthulhumbus text-base">Slider with large UICards</h2>
        </div>
        <div className=' px-4'>
          <Slider {...settingslarge}>
            {cards.map((card, index) => (
              <div key={index}>
                <UICardLarge image={card.image} heading={card.heading} subheading={card.subheading} />
              </div>
            ))}
          </Slider>
        </div>
        <br/>
        <br/>
        <div className="flex flex-col ">
          <h2 className="px-4 font-cthulhumbus text-base">Slider with small UICards</h2>
        </div>
        <div className='px-4'>
          <Slider {...settingssmall}>
            {cards.map((card, index) => (
              <div key={index}>
                <UICard image={card.image} heading={card.heading} subheading={card.subheading} />
              </div>
            ))}
          </Slider>
        </div>
        <br/>

      </div>

    </div>
  );
};

export default Dashboard;
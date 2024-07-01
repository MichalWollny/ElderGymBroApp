import React, { useEffect, useState } from 'react';
import cuteCthulhu from '../assets/images/cuteCthulhu.png';
import firstWorkoutDone from '../assets/images/firstworkoutdone.png';
import trainingNight from '../assets/images/trainingnight.jpeg';
import chestDay from '../assets/images/Chest1.jpeg';
import weekendWorkout from '../assets/images/weekendworkout.jpeg';
import firsplancreated from '../assets/images/firstplancreated.jpeg';
import { LinearProgress, Box, Typography, Modal, Button } from '@mui/material';
import AchievementItem from './AchievementItem';

const achievements = [
  { id: 1, name: 'Beginner Gains', imageUrl: cuteCthulhu, requirements: 'First Workout completed' },
  { id: 2, name: 'Firstworkout ', imageUrl: firstWorkoutDone },
  { id: 3, name: 'Training at night', imageUrl: trainingNight, requirements: 'Start a workout between 10 pm and 2 am' },
  { id: 4, name: 'Chestday', imageUrl: chestDay, requirements: 'Chest workout on Mondays' },
  {
    id: 5,
    name: 'Weekend Workout Cultist',
    imageUrl: weekendWorkout,
    requirements: 'Finish your Workout on Saturday/Sunday',
  },
  {
    id: 6,
    name: 'First Incantation of Fitness',
    imageUrl: firsplancreated,
    requirements: 'Create your first personalized workout plan',
  },
  // Weitere Achievements hier adden.
];

const Trophys = ({ progress, updateProgress, toggleAchievement, unlockedAchievments }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [firstWorkoutCompleted, setFirstWorkoutCompleted] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Schaltet Achievment frei wenn (true) und passt Progressbar an.

  // Hier fügen wir die Bedingungen für das Freischalten der Achievments ein.
  useEffect(() => {
    setProgressPercentage(progress);
    if (firstWorkoutCompleted && !unlockedAchievments.includes(1)) {
      toggleAchievement(1, true);
    } else if (!firstWorkoutCompleted && unlockedAchievments.includes(2)) {
      toggleAchievement(2, false);
    }
  }, [progress, firstWorkoutCompleted, unlockedAchievments, toggleAchievement]);

  useEffect(() => {
    const newProgress = (unlockedAchievments.length / achievements.length) * 100;
    setProgressPercentage(newProgress);
    updateProgress(newProgress);
  }, [unlockedAchievments, updateProgress]);

  const handleAchievmentClick = (achievement) => {
    setSelectedAchievement(achievement);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* window bar */}
      <div className="flex flex-row justify-start bg-gray-900">
        {/* icon button container*/}
        <div className="flex flex-row">
          {/* link container*/}
          <div className="flex flex-row justify-center text-teal-100">
            <a href="/" className="m-2 font-semibold text-teal-600">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-center">
        <h1 className="p-2 text-center font-cthulhumbus text-3xl font-medium leading-tight text-teal-800 sm:text-3xl md:text-4xl">
          Trophys{' '}
        </h1>
      </div>
      {/* SVG Container */}
      <div className="mt-4 flex justify-center">
        <svg width="150px" height="150px" viewBox="0 -0.5 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <rect
              x="11.9141"
              y="15.4102"
              width="1.58679"
              height="5.59554"
              fill="url(#paint0_linear_103_1804)"></rect>{' '}
            <path d="M5.89393 3.5979H1C1 7.393 1.29104 9.57603 6.69821 9.57603" stroke="#FFDD66" strokeWidth="2"></path>{' '}
            <path
              d="M19.8636 8.56848C19.8636 12.5379 16.6458 15.7557 12.6764 15.7557C8.70707 15.7557 5.48926 12.5379 5.48926 8.56848C5.48926 4.59911 8.70707 1.3813 12.6764 1.3813C16.6458 1.3813 19.8636 4.59911 19.8636 8.56848Z"
              fill="#FFDD66"></path>{' '}
            <path
              d="M12.6764 20.7262C9.74579 20.7262 7.37002 21.5833 7.37002 22.6406H17.9829C17.9829 21.5833 15.6071 20.7262 12.6764 20.7262Z"
              fill="#FFDD66"></path>{' '}
            <path d="M5.48926 0H19.8636V8.23263H5.48926V0Z" fill="#FFDD66"></path>{' '}
            <path d="M17.9829 23.01H7.37002V22.607H17.9829V23.01Z" fill="#FFDD66"></path>{' '}
            <path
              d="M19.6603 3.5979H24.5542C24.5542 7.393 24.2632 9.57603 18.856 9.57603"
              stroke="#DE9300"
              strokeWidth="2"></path>{' '}
            <path
              d="M19.8634 8.56843C19.8634 12.5378 16.6456 15.7556 12.6762 15.7556C12.6762 15.7556 12.6762 12.5378 12.6762 8.56843C12.6762 4.59905 12.6762 1.38124 12.6762 1.38124C16.6456 1.38124 19.8634 4.59905 19.8634 8.56843Z"
              fill="url(#paint1_linear_103_1804)"></path>{' '}
            <path
              d="M12.6762 20.7262C12.6762 20.7262 12.6762 21.5833 12.6762 22.6405H17.9826C17.9826 21.5833 15.6069 20.7262 12.6762 20.7262Z"
              fill="url(#paint2_linear_103_1804)"></path>{' '}
            <path
              d="M12.6762 0.000488281H19.8634V8.23258H12.6762V0.000488281Z"
              fill="url(#paint3_linear_103_1804)"></path>{' '}
            <path
              d="M17.9826 23.01H12.6762C12.6762 23.01 12.6643 22.7639 12.6762 22.6069C12.8331 20.5406 17.9826 22.6069 17.9826 22.6069V23.01Z"
              fill="url(#paint4_linear_103_1804)"></path>{' '}
            <circle cx="12.8176" cy="7.76846" r="4.30105" fill="#DCAE0C"></circle>{' '}
            <circle
              cx="12.8088"
              cy="7.71544"
              r="3.12686"
              fill="#DE9300"
              stroke="#FFE176"
              strokeWidth="4.55437"></circle>{' '}
            <path
              d="M12.8087 4.17944L13.8984 6.35885L16.0778 6.63128L14.5812 8.30942L14.9881 10.7177L12.8087 9.62796L10.6293 10.7177L11.0397 8.30942L9.53955 6.63128L11.719 6.35885L12.8087 4.17944Z"
              fill="#FFF4BC"></path>{' '}
            <path
              d="M13.2559 3.95584L12.8087 3.06141L12.3614 3.95584L11.3914 5.8959L9.47753 6.13514L8.53113 6.25344L9.16678 6.96451L10.5063 8.46298L10.1364 10.6337L9.97064 11.606L10.8529 11.1649L12.8087 10.187L14.7645 11.1649L15.6451 11.6052L15.4811 10.6344L15.1143 8.46295L16.4509 6.96406L17.0848 6.25327L16.1398 6.13514L14.2259 5.8959L13.2559 3.95584Z"
              stroke="#C98500"
              strokeOpacity="0.7"></path>{' '}
            <rect x="5" y="23" width="15" height="2" fill="#DE9300"></rect>{' '}
            <defs>
              {' '}
              <linearGradient
                id="paint0_linear_103_1804"
                x1="12.7075"
                y1="15.4102"
                x2="12.7075"
                y2="21.0057"
                gradientUnits="userSpaceOnUse">
                {' '}
                <stop stopColor="#C07F00"></stop> <stop offset="1" stopColor="#DE9300"></stop>{' '}
              </linearGradient>{' '}
              <linearGradient
                id="paint1_linear_103_1804"
                x1="19.8139"
                y1="7.24836"
                x2="12.6085"
                y2="7.24836"
                gradientUnits="userSpaceOnUse">
                {' '}
                <stop stopColor="#DE9300"></stop> <stop offset="1" stopColor="#FFBC11"></stop>{' '}
              </linearGradient>{' '}
              <linearGradient
                id="paint2_linear_103_1804"
                x1="19.8139"
                y1="7.24836"
                x2="12.6085"
                y2="7.24836"
                gradientUnits="userSpaceOnUse">
                {' '}
                <stop stopColor="#DE9300"></stop> <stop offset="1" stopColor="#FFBC11"></stop>{' '}
              </linearGradient>{' '}
              <linearGradient
                id="paint3_linear_103_1804"
                x1="19.8139"
                y1="7.24836"
                x2="12.6085"
                y2="7.24836"
                gradientUnits="userSpaceOnUse">
                {' '}
                <stop stopColor="#DE9300"></stop> <stop offset="1" stopColor="#FFBC11"></stop>{' '}
              </linearGradient>{' '}
              <linearGradient
                id="paint4_linear_103_1804"
                x1="19.8139"
                y1="7.24836"
                x2="12.6085"
                y2="7.24836"
                gradientUnits="userSpaceOnUse">
                {' '}
                <stop stopColor="#DE9300"></stop> <stop offset="1" stopColor="#FFBC11"></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
          </g>
        </svg>
      </div>
      {/* Progressbar Komponente */}
      <div className="container mx-auto flex flex-col items-center">
        <Box sx={{ width: '80%', mt: 1 }}>
          <LinearProgress variant="determinate" color="warning" value={progressPercentage} sx={{ height: 8 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Typography
              variant="body2"
              color="textSecondary">{`${Math.round(progressPercentage)}% of all Trophys`}</Typography>
          </Box>
        </Box>
      </div>

      {/* Achievement Komponente */}
      <div className="mt-12 grid grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <AchievementItem
            key={achievement.id}
            achievement={achievement}
            unlocked={unlockedAchievments.includes(achievement.id)}
            onClick={() => handleAchievmentClick(achievement)}
          />
        ))}
      </div>
      {/* Modal für Achievment-Informationen */}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 'none',
            position: 'fixed',
            bottom: 0,
            width: '100vw',
          }}>
          {selectedAchievement && (
            <>
              <div className="font-cthulhumbus text-2xl">{selectedAchievement.name}</div>
              <div className="mt-2 text-[#2B777D]">{selectedAchievement.requirements}</div>
              <Button onClick={handleClose} sx={{ mt: 2 }}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Trophys;

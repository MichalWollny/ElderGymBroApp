import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import Profilerework from './pages/ProfileRework';
import Template from './pages/Template';
import StartYourJourney from './pages/StartYourJourney';
import WhatsYourGoal from './pages/WhatsYourGoal';
import SetYourGrind from './pages/SetYourGrind';
import WorkoutPlan from './pages/Workouts';

import EditUserData from './pages/EditUserData';
import SetUp from './pages/SetUp';
import useFetchData from './utils/FetchData';
import Trophys from './pages/Trophys';
import UIElements from './assets/components/UIElements';
import BottomAppBar from './assets/components/BottomAppBar';
import { BottomNavigation } from '@mui/material';
import MenuAppBar from './assets/components/MenuAppBar';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
=======
import StepperComponent from './assets/components/StepperComponent';
import ForgotPassword from './pages/ForgotPassword';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './pages/RegisterForm';
import BottomNav from './assets/components/BottomNav';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';
>>>>>>> 115e82b9f7ad9810b3fba39a7d3faf34dd6ab399


function App() {
  const { hardcodedWorkouts, isLoading } = useFetchData();
  const [progress, setProgress] = useState(0);
  const [unlockedAchievments, setUnlockedAchievments] = useState([]);
  const location = useLocation();
  // Hier die Routes adden, die BottomNav enthalten sollen.
  const showBottomNav = ['/home', '/workouts', '/trophys', '/progress', '/startyourjourney'].includes(
    location.pathname,
  );

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const toggleAchievement = (id, status) => {
    setUnlockedAchievments((prev) => {
      if (status) {
        if (!prev.includes(id)) {
          return [...prev, id];
        }
      } else {
        return prev.filter((achievementId) => achievementId !== id);
      }
      return prev;
    });
  };
  // Stepper Routes
  const stepRoutes = ['/startyourjourney', '/whatsyourgoal', '/setyourgrind'];

  console.log(import.meta.env.VITE_API_URL);

  return (
    <>
      {/* <MenuAppBar/> */}
      {/* Stepper Settings */}
      {/* {stepRoutes.includes(location.pathname) && <StepperComponent />} */}
      {/* <BottomNavigation/> */}
      {showBottomNav && <BottomNav />}
      {/* <BottomAppBar /> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
=======
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/edituserdata" element={<EditUserData />} />
>>>>>>> 115e82b9f7ad9810b3fba39a7d3faf34dd6ab399
        <Route path="/profilerework" element={<Profilerework />} />
        <Route path="/edituserdata" element={<EditUserData />} />
        <Route
          path="/trophys"
          element={
            <Trophys
              progress={progress}
              updateProgress={updateProgress}
              toggleAchievement={toggleAchievement}
              unlockedAchievments={unlockedAchievments}
            />
          }
        />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        <Route path="/template" element={<Template />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/startyourjourney" element={<StartYourJourney />} />

        <Route path="/whatsyourgoal" element={<WhatsYourGoal />} />
        <Route path="/setyourgrind" element={<SetYourGrind />} />
        <Route path="/uielements" element={<UIElements />} />
<<<<<<< HEAD
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts" element={<Workouts workouts={hardcodedWorkouts} />} />
        <Route path="/dashboard" element={<Dashboard/>} />
=======
        <Route path="/workouts" element={<WorkoutPlan workouts={hardcodedWorkouts} />} />
>>>>>>> 115e82b9f7ad9810b3fba39a7d3faf34dd6ab399
      </Routes>
    </>
  );
}

export default App;

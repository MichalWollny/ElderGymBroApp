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
import StepperComponent from './assets/components/StepperComponent';
import ForgotPassword from './pages/ForgotPassword';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './pages/RegisterForm';
import BottomNav from './assets/components/BottomNav';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';

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
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/edituserdata" element={<EditUserData />} />
        <Route path="/profilerework" element={<Profilerework />} />
        <Route
          path="/trophys"
          element={
            // add a bottom margin, because otherwise this site goes right trough the navbar and makes it transparent
            <div className="mb-16">
              <Trophys
                progress={progress}
                updateProgress={updateProgress}
                toggleAchievement={toggleAchievement}
                unlockedAchievments={unlockedAchievments}
              />
            </div>
          }
        />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        <Route path="/template" element={<Template />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/startyourjourney" element={<StartYourJourney />} />

        <Route path="/whatsyourgoal" element={<WhatsYourGoal />} />
        <Route path="/setyourgrind" element={<SetYourGrind />} />
        <Route path="/uielements" element={<UIElements />} />
        <Route path="/workouts" element={<WorkoutPlan workouts={hardcodedWorkouts} />} />
      </Routes>
    </>
  );
}

export default App;

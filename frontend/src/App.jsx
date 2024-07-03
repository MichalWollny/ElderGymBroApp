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
import SignUp from './pages/SignUp';
import Registration from './pages/Registration';
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

function App() {
  const { hardcodedWorkouts, isLoading } = useFetchData();
  const [progress, setProgress] = useState(0);
  const [unlockedAchievments, setUnlockedAchievments] = useState([]);
  const location = useLocation();

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

  return (
    <>
      {/* <MenuAppBar/> */}
      {/* Stepper Settings */}
      {/* {stepRoutes.includes(location.pathname) && <StepperComponent />} */}
      {/* <BottomNavigation/> */}
      <BottomAppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/edituserdata" element={<EditUserData />} />
        <Route path="/profilerework" element={<Profilerework />} />
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
        <Route path="/workouts" element={<WorkoutPlan workouts={hardcodedWorkouts} />} />
      </Routes>
    </>
  );
}

export default App;

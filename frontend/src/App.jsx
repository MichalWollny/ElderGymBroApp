import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import Profilerework from './pages/ProfileRework';
import Template from './pages/Template';
import StartYourJourney from './pages/StartYourJourney';
import WhatsYourGoal from './pages/WhatsYourGoal';
import SetYourGrind from './pages/SetYourGrind';

import Workouts from './pages/Workouts';
import SignUp from './pages/SignUp';
import Registration from './pages/Registration';
import EditUserData from './pages/EditUserData';
import SetUp from './pages/SetUp';

import useFetchData from './utils/FetchData';
import UIElements from './assets/components/UIElements';
import BottomAppBar from './assets/components/BottomAppBar';
import { BottomNavigation } from '@mui/material';


function App() {
  const { hardcodedWorkouts, isLoading } = useFetchData();

  return (
    <>
      <BottomAppBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edituserdata" element={<EditUserData />} />
        <Route path="/profilerework" element={<Profilerework />} />
        <Route path="/template" element={<Template />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/startyourjourney" element={<StartYourJourney />} />
        <Route path="/whatsyourgoal" element={<WhatsYourGoal />} />
        <Route path="/setyourgrind" element={<SetYourGrind />} />
        <Route path="/uielements" element={<UIElements/>} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts" element={<Workouts workouts={hardcodedWorkouts} />} />
      </Routes>
    </>
  );
}

export default App;

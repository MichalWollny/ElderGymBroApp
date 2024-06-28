import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import Profile from './pages/Profile';
import Profilerework from './pages/ProfileRework';
import Navbar from './pages/Navbar';
import Template from './pages/Template';
import StartYourJourney from './pages/StartYourJourney';
import WhatsYourGoal from './pages/WhatsYourGoal';
import SetYourGrind from './pages/SetYourGrind';
import SplashScreen from './pages/SplashScreen';
import UIElements from './pages/UIElements';
import Workouts from './pages/Workouts';
import SignUp from './pages/SignUp';
import Registration from './pages/Registration';
import UICard from './pages/UICard';
import EditUserData from './pages/EditUserData';
import SetUp from './pages/SetUp';

import useFetchData from './utils/FetchData';
import Trophys from './pages/Trophys';

function App() {
  const { hardcodedWorkouts, isLoading } = useFetchData();
  const [progress, setProgress] = useState(0);
  const [unlockedAchievments, setUnlockedAchievments] = useState([]);

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

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
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
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/template" element={<Template />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/startyourjourney" element={<StartYourJourney />} />
        <Route path="/whatsyourgoal" element={<WhatsYourGoal />} />
        <Route path="/setyourgrind" element={<SetYourGrind />} />
        <Route path="/splashscreen" element={<SplashScreen />} />
        <Route path="/uielements" element={<UIElements />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/uicard" element={<UICard />} />
        <Route path="/workouts" element={<Workouts workouts={hardcodedWorkouts} />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css';
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
import Login from './pages/LogIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilerework" element={<Profilerework />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/template" element={<Template />} />
        <Route path="/startyourjourney" element={<StartYourJourney />} />
        <Route path="/whatsyourgoal" element={<WhatsYourGoal />} />
        <Route path="/setyourgrind" element={<SetYourGrind />} />
        <Route path="/splashscreen" element={<SplashScreen />} />
        <Route path="/uielements" element={<UIElements />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}

export default App;

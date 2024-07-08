import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Profilerework from './pages/ProfileRework';
import Template from './pages/Template';
import StartYourJourney from './pages/onboarding/StartYourJourney';
import WhatsYourGoal from './pages/onboarding/WhatsYourGoal';
import SetYourGrind from './pages/onboarding/SetYourGrind';
import WorkoutPlan from './pages/Workouts';
import EditUserData from './pages/EditUserData';
import SetUp from './pages/onboarding/SetUp';
import useFetchData from './utils/FetchData';
import Trophys from './pages/Trophys';
import UIElements from './assets/components/UIElements';
import ForgotPassword from './pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './pages/RegisterForm';
import BottomNav from './assets/components/BottomNav';
import LoginForm from './pages/LoginForm';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import GenderWar from './pages/onboarding/GenderWar';
import ProgressTracker from './pages/ProgressTracker';
import UserBar from './assets/components/UserBar';
import UserWorkout from './pages/UserWorkout';
import PrivateRoute from './utils/PrivateRoute';
import AccessDeniedPage from './pages/AccessDeniedPage';

function App() {
  const { hardcodedWorkouts } = useFetchData();
  const [progress, setProgress] = useState(0);
  const [unlockedAchievments, setUnlockedAchievments] = useState([]);
  const location = useLocation();
  // Hier die Routes adden, die BottomNav enthalten sollen.
  const showBottomNav = [
    '/home',
    '/workouts',
    '/trophys',
    '/progress',
    '/profile',
    '/edituserdata',
    '/testpage',
    '/userworkout',
  ].includes(location.pathname);

  const showUserBar = ['/home', '/workouts', '/trophys', '/progress', '/userworkouts', '/testpage'].includes(
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

  return (
    <>
      {/* Stepper Settings */}
      {/* {stepRoutes.includes(location.pathname) && <StepperComponent />} */}
      {/* Bottom Nav */}
      {showBottomNav && <BottomNav />}
      {/* {showUserBar && <UserBar />} */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Slide
      />
      <Routes>
        {/* Open Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/accessdenied" element={<AccessDeniedPage />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/edituserdata" element={<EditUserData />} />
          <Route path="/profile" element={<Profilerework />} />
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
          <Route path="/workouts" element={<WorkoutPlan workouts={hardcodedWorkouts} />} />
          {/* No Navbar */}
          <Route path="/progress" element={<ProgressTracker />} />
          <Route path="/setup" element={<SetUp />} />
          <Route path="/startyourjourney" element={<StartYourJourney />} />
          <Route path="/whatsyourgoal" element={<WhatsYourGoal />} />
          <Route path="/setyourgrind" element={<SetYourGrind />} />
          <Route path="/gender" element={<GenderWar />} />
          <Route path="/template" element={<Template />} />
          <Route path="/uielements" element={<UIElements />} />
          <Route path="/userworkout" element={<UserWorkout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

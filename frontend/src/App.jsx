import './App.css';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </>
  );
}

export default App;

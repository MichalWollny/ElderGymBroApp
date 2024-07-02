import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, LinearProgress } from '@mui/material';

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div className="font-cthulhumbus text-teal-500">Start Your Journey</div>;
    case 1:
      return <div className="font-cthulhumbus text-teal-500">Whats your Goal</div>;
    case 2:
      return <div className="font-cthulhumbus text-teal-500">Set your Grind</div>;
    default:
      return <div>Unknown Step</div>;
  }
}
export default function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectionsMade, setSelectionsMade] = useState(false);
  const steps = 3;
  const location = useLocation();
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectionsMade) {
      setActiveStep((prevActiveStep) => {
        const nextStep = prevActiveStep + 1;
        if (nextStep < steps) {
          navigate(stepRoutes[nextStep]);
        }
        return nextStep;
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const prevStep = prevActiveStep - 1;
      if (prevStep >= 0) {
        navigate(stepRoutes[prevStep]);
      }
      return prevStep;
    });
  };

  const stepRoutes = ['/startyourjourney', '/whatsyourgoal', '/setyourgrind'];

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 50 }}>
      {stepRoutes.includes(location.pathname) && (
        <LinearProgress variant="determinate" value={(activeStep / steps) * 100} />
      )}
      <div>
        {activeStep === steps ? (
          <div>
            <h1>All steps completed</h1>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} disabled={!selectionsMade}>
                {activeStep === steps - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Box>
  );
}
